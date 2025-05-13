import { NextResponse, NextRequest } from 'next/server';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
// import nodemailer from 'nodemailer'; // Removed nodemailer

// Environment variables for Google Sheets
const GOOGLE_SHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const GOOGLE_SHEET_NAME = 'LEADS';
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY!.split(String.raw`\n`).join('\n');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Removed Email environment variables

// Helper function to get column letter from 0-indexed column number
function getColumnLetter(colIndex: number): string {
  let letter = '';
  let num = colIndex + 1; // 1-indexed for calculation
  while (num > 0) {
    const remainder = (num - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    num = Math.floor((num - 1 + remainder) / 26); // Corrected Math.floor logic
  }
  return letter;
}

// Helper function to parse User-Agent (basic example)
function parseUserAgent(userAgent: string | null) { // Added type
  if (!userAgent) return { browser: 'Unknown', os: 'Unknown' }; // Removed deviceType here, it's separate
  let browser = 'Unknown';
  let os = 'Unknown';

  if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Chrome')) browser = 'Chrome';
  else if (userAgent.includes('Safari')) browser = 'Safari';
  else if (userAgent.includes('Edge')) browser = 'Edge';
  else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) browser = 'Internet Explorer';

  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac OS')) os = 'Mac OS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS';

  return { browser, os };
}

function getDeviceType(screenWidth: number | undefined) { // Added type
    if (screenWidth === undefined || screenWidth === null) return 'Unknown';
    if (screenWidth < 768) return 'mobile';
    if (screenWidth < 1024) return 'tablet';
    return 'desktop';
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    console.log('Form data:', formData);
    console.log('Request:', request);

    if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
        console.error('Missing Google Sheets API configuration in environment variables.');
        return NextResponse.json({ success: false, message: 'Server configuration error for Google Sheets.' }, { status: 500 });
    }

    if (!formData.email || !formData.fullName || !formData.privacyConsent) {
      return NextResponse.json({ success: false, message: 'Missing required fields or consent.' }, { status: 400 });
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'N/A'; // Adjusted IP fetching
    const userAgentString = formData.userAgent || request.headers.get('user-agent') || 'N/A';
    const { browser, os } = parseUserAgent(userAgentString);
    const deviceType = getDeviceType(formData.screenWidth);
    const geolocation = `Country - [Not Implemented], Region - [Not Implemented], City - [Not Implemented]`;

    // --- Google Sheets API Interaction (using googleapis) ---
    const auth = new GoogleAuth({
        credentials: {
          client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: GOOGLE_PRIVATE_KEY,
        },
        scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const EXPECTED_HEADERS = [
        "Submission Timestamp", "Full Name", "Company Name", "Email", "Role",
        "Help Areas Selected", "Other Help Area Text", "Industry", "Sample Report Interest", "Message",
        "Privacy Consent", "IP Address", "Geolocation", "Browser", "Device Type", "OS",
        "Browser Language", "Referral URL", "User Agent String"
    ];
    const headerRangeForCheck = `${GOOGLE_SHEET_NAME}!A1:${getColumnLetter(EXPECTED_HEADERS.length - 1)}1`;

    try {
        // --- Check and add headers if necessary ---
        const firstRowDataResponse = await sheets.spreadsheets.values.get({
            spreadsheetId: GOOGLE_SHEET_ID,
            range: headerRangeForCheck,
        });

        const currentFirstRowValues = firstRowDataResponse.data.values?.[0];
        let headersMatch = false;

        if (currentFirstRowValues && currentFirstRowValues.length >= EXPECTED_HEADERS.length) {
            headersMatch = EXPECTED_HEADERS.every((header, index) => currentFirstRowValues[index] === header);
        }

        if (!headersMatch) {
            console.log('Headers do not match expected, are missing, or sheet might be empty. Ensuring headers are set.');

            const isSheetEffectivelyEmpty = !currentFirstRowValues || currentFirstRowValues.every(cell => typeof cell === 'string' && cell.trim() === '');

            if (isSheetEffectivelyEmpty) {
                console.log('Sheet is effectively empty or first row is blank. Writing headers to A1.');
                await sheets.spreadsheets.values.update({
                    spreadsheetId: GOOGLE_SHEET_ID,
                    range: `${GOOGLE_SHEET_NAME}!A1`,
                    valueInputOption: 'USER_ENTERED',
                    requestBody: { values: [EXPECTED_HEADERS] },
                });
                console.log('Headers written to A1.');
            } else {
                console.log('First row contains data or incorrect headers. Inserting new row at the top for headers.');
                
                const spreadsheetInfo = await sheets.spreadsheets.get({
                    spreadsheetId: GOOGLE_SHEET_ID!,
                    fields: 'sheets(properties(sheetId,title))'
                });
                const targetSheetProperties = spreadsheetInfo.data.sheets?.find(
                    s => s.properties?.title === GOOGLE_SHEET_NAME
                )?.properties;

                if (targetSheetProperties?.sheetId == null) {
                    console.error(`Sheet named "${GOOGLE_SHEET_NAME}" not found or its sheetId is missing.`);
                    throw new Error(`Sheet configuration error: Could not find sheetId for ${GOOGLE_SHEET_NAME}.`);
                }
                const numericSheetId = targetSheetProperties.sheetId;

                await sheets.spreadsheets.batchUpdate({
                    spreadsheetId: GOOGLE_SHEET_ID,
                    requestBody: {
                        requests: [{
                            insertDimension: {
                                range: {
                                    sheetId: numericSheetId,
                                    dimension: 'ROWS',
                                    startIndex: 0,
                                    endIndex: 1
                                },
                                inheritFromBefore: false
                            }
                        }]
                    }
                });
                console.log('New row inserted at the top.');

                await sheets.spreadsheets.values.update({
                    spreadsheetId: GOOGLE_SHEET_ID,
                    range: `${GOOGLE_SHEET_NAME}!A1`,
                    valueInputOption: 'USER_ENTERED',
                    requestBody: { values: [EXPECTED_HEADERS] },
                });
                console.log('Headers written to the new first row.');
            }
        } else {
            console.log('Headers are already present and correct.');
        }
        // --- End of Header Check ---

        const helpAreasText = Array.isArray(formData.helpAreas) ? formData.helpAreas.map((area: string) => { // Added type for area
            if (area === 'other' && formData.otherHelpArea) {
                return `Other: ${formData.otherHelpArea}`;
            }
            return area;
        }).join(', ') : (typeof formData.helpAreas === 'string' ? formData.helpAreas : '');
        
        // Ensure this order matches your Google Sheet headers
        const newRowValues = [
            formData.submissionTimestamp || new Date().toISOString(),
            formData.fullName || '',
            formData.companyName || '',
            formData.email || '',
            formData.role || '',
            helpAreasText,
            formData.otherHelpArea || '',
            formData.industry || '',
            formData.sampleReport || '',
            formData.message || '',
            formData.privacyConsent ? 'Yes' : 'No',
            ip,
            geolocation,
            browser,
            deviceType,
            os,
            formData.browserLanguage || 'N/A',
            formData.referralUrl || 'N/A',
            userAgentString,
        ];

        const appendResponse = await sheets.spreadsheets.values.append({
            spreadsheetId: GOOGLE_SHEET_ID,
            range: `${GOOGLE_SHEET_NAME}!A1`, 
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
              values: [newRowValues],
            },
        });

        if (appendResponse.status === 200) {
            console.log('Data successfully appended to Google Sheet');
        } else {
            console.error('Google Sheets API error after append:', appendResponse.status, appendResponse.statusText, appendResponse.data);
            return NextResponse.json({ success: false, message: 'Failed to submit form data to Google Sheet' }, { status: appendResponse.status || 500 });
        }

    } catch (sheetError) {
        console.error('Error during Google Sheets operation (header setup or data append):', sheetError);
        if (sheetError instanceof Error) {
            if (sheetError.message?.includes('Sheet configuration error')) {
                return NextResponse.json({ success: false, message: sheetError.message }, { status: 500 });
            }
            if (sheetError.message?.includes('invalid_grant')) {
                return NextResponse.json({ success: false, message: 'Google Sheets authentication failed. Check service account credentials and sheet permissions.'}, { status: 401 });
            }
        }
        return NextResponse.json({ success: false, message: 'Failed to save data to Google Sheet. Please try again later.' }, { status: 500 });
    }
    // --- End of Google Sheets API Interaction ---

    // --- Email Sending (Removed) ---
    // --- End of Email Sending (Removed) ---

    return NextResponse.json({ success: true, message: 'Successfully added to waitlist.' });

  } catch (error) {
    console.error('Error in /api/addToWaitlist:', error);
    let errorMessage = 'An unexpected error occurred while processing your request.';
    if (error instanceof Error && error.message?.includes('JSON')) {
      errorMessage = 'Invalid request format.';
    } 
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
} 