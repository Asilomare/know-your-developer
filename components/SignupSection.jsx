'use client'

import React, { useState } from 'react';
import { z } from 'zod';
import toast from 'react-hot-toast';

// Define blocked email domains
const blockedEmailDomains = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'protonmail.com', 'zoho.com', 'mail.com', 'gmx.com',
  'yandex.com', 'live.com', 'me.com', 'msn.com', 'fastmail.com', 'pm.me',
  'tutanota.com', 'duck.com', 'example.com', 'test.com', 'email.com',
  'mailinator.com', 'tempmail.com', '10minutemail.com', 'guerrillamail.com',
  'trashmail.com', 'dispostable.com', 'getnada.com', 'moakt.com', 'spambog.com'
];

// Define form validation schema
const formSchema = z.object({
  fullName: z.string().min(1, "Please enter your name so we know who to follow up with."),
  companyName: z.string().min(1, "Please let us know your company name."),
  email: z.string()
    .email("Please enter a valid business email address.")
    .refine(email => {
      const domain = email.substring(email.lastIndexOf('@') + 1);
      return !blockedEmailDomains.includes(domain.toLowerCase());
    }, "Please use your business email address. We do not accept free or common, personal-use email providers."),
  role: z.string().min(1, "Let us know your role or title at the company."),
  helpAreas: z.array(z.string()).min(1, "Please select at least one area where KYD can support you."),
  otherHelpArea: z.string().optional(),
  industry: z.string().min(1, "Please select your industry."),
  sampleReport: z.enum(["yes", "no"], {
    required_error: "Please tell us if you'd like to receive a sample KYD report."
  }),
  message: z.string().optional(),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: "You must accept the Privacy Policy to submit the form." })
  }),
  // Added for submission data
  browserLanguage: z.string().optional(),
  referralUrl: z.string().optional(),
  screenWidth: z.number().optional(),
  userAgent: z.string().optional(),
  submissionTimestamp: z.string().optional(),
});

// Define initial form state (memoized or outside component if static)
const initialFormData = {
  fullName: '',
  companyName: '',
  email: '',
  role: '',
  helpAreas: [],
  otherHelpArea: '',
  industry: '',
  sampleReport: '',
  message: '',
  privacyConsent: false,
  // Added for submission data
  browserLanguage: '',
  referralUrl: '',
  screenWidth: 0,
  userAgent: '',
  submissionTimestamp: '',
};

const WaitlistSection = () => {
  // Form state
  const [formData, setFormData] = useState({...initialFormData});

  // Error state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State for privacy modal
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  
  // Help areas options
  const helpAreasOptions = [
    { id: 'hiring-developers', label: 'Hiring Developers' },
    { id: 'compliance-screening', label: 'Compliance / Sanctions Screening' },
    { id: 'os-due-diligence', label: 'Open Source Due Diligence' },
    { id: 'investor-risk', label: 'Investor Risk Assessments' },
    { id: 'other', label: 'Other' }
  ];

  // Role options
  const roleOptions = [
    { value: '', label: 'Select your role...' },
    { value: 'c-level', label: 'C-Level Executive (CEO, CTO, CIO, etc.)' },
    { value: 'vp-director', label: 'VP / Director' },
    { value: 'manager-lead', label: 'Manager / Team Lead' },
    { value: 'product-manager', label: 'Product Manager' },
    { value: 'engineer-developer', label: 'Software Engineer / Developer' },
    { value: 'compliance-officer', label: 'Compliance / Risk Officer' },
    { value: 'recruiter-talent', label: 'Recruiter / Talent Lead' },
    { value: 'investor-advisor', label: 'Investor / Advisor' },
    { value: 'other', label: 'Other' }
  ];

  // Industry options
  const industryOptions = [
    { value: '', label: 'Select your industry...' },
    { value: 'financial-services', label: 'Financial Services' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'retail-ecommerce', label: 'Retail & E-commerce' },
    { value: 'government', label: 'Government' },
    { value: 'technology', label: 'Technology' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'legal', label: 'Legal' },
    { value: 'media-entertainment', label: 'Media & Entertainment' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' }
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked, name } = e.target;
    
    if (name === "privacyConsent") {
      setFormData(prev => ({
        ...prev,
        privacyConsent: checked
      }));
      if (errors.privacyConsent) {
        setErrors(prev => {
          const newErrors = {...prev};
          delete newErrors.privacyConsent;
          return newErrors;
        });
      }
      return;
    }
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          helpAreas: [...prev.helpAreas, value]
        };
      } else {
        return {
          ...prev,
          helpAreas: prev.helpAreas.filter(area => area !== value)
        };
      }
    });
    
    // Clear error for helpAreas when user checks any box
    if (errors.helpAreas) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors.helpAreas;
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure privacy consent is checked before attempting to submit
    if (!formData.privacyConsent) {
      setErrors(prev => ({...prev, privacyConsent: "You must accept the Privacy Policy to submit the form."}));
      toast.error("You must accept the Privacy Policy to submit the form.");
      return; // Stop submission if privacy consent is not given
    }

    const augmentedFormData = {
      ...formData,
      browserLanguage: navigator.language || '',
      referralUrl: document.referrer || '',
      screenWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
      userAgent: navigator.userAgent || '',
      submissionTimestamp: new Date().toISOString(),
    };
    
    // Special handling for "other" help area if "other" is selected but text is empty
    const finalFormData = { ...augmentedFormData };
    if (formData.helpAreas.includes('other') && !formData.otherHelpArea) {
      // Optionally, you might want to set a default value or handle this case specifically
      // For now, we'll just ensure it's submitted as an empty string if not filled.
    }
    
    try {
      // Validate form data
      formSchema.parse(finalFormData); 
      
      setErrors({}); 
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/addToWaitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(finalFormData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          toast.success("Thanks! Your message was received. We'll be in touch shortly.");
          setFormData({...initialFormData}); // Reset form
          setErrors({}); // Clear any previous errors just in case
        } else {
          toast.error(result.message || 'Something went wrong. Please try again.');
        }
      } catch (apiError) {
        console.error('API error:', apiError);
        toast.error('Failed to submit form. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        let firstErrorMessage = null;
        error.errors.forEach(err => {
          // Ensure err.path[0] is a string key of formData. If path is nested, adjust accordingly.
          const errorKey = err.path[0]?.toString();
          if (errorKey) {
            newErrors[errorKey] = err.message;
          }
          if (!firstErrorMessage) firstErrorMessage = err.message;
        });
        setErrors(newErrors);
        // if (firstErrorMessage) toast.error(firstErrorMessage); // Optional: toast first validation error
      } else {
        console.error("Unexpected error during form submission:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <section id="signup" className="bg-indigo-700">
      <div className="max-w-3xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get Started with KYD
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Fill out the form below to join our waitlist and be among the first to experience KYD&apos;s solution.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Full Name */}
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 ${errors.fullName ? 'border-red-500' : 'border'}`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>
            </div>

            {/* Company Name */}
            <div className="sm:col-span-2">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 ${errors.companyName ? 'border-red-500' : 'border'}`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Role / Title */}
            <div className="sm:col-span-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role / Title <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 ${errors.role ? 'border-red-500' : 'border'}`}
                >
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                )}
              </div>
            </div>

            {/* Industry */}
            <div className="sm:col-span-2">
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500 ${errors.industry ? 'border-red-500' : 'border'}`}
                >
                  {industryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
                )}
              </div>
            </div>

            {/* How can KYD help you? */}
            <div className="sm:col-span-2">
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                  How can KYD help you? <span className="text-red-500">*</span>
                </legend>
                <div className="mt-2 space-y-2">
                  {helpAreasOptions.map((option) => (
                    <div key={option.id} className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={option.id}
                          name="helpAreas"
                          type="checkbox"
                          value={option.id}
                          checked={formData.helpAreas.includes(option.id)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={option.id} className="text-gray-700">
                          {option.label}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                {formData.helpAreas.includes('other') && (
                  <div className="mt-2">
                    <label htmlFor="otherHelpArea" className="sr-only">Other details</label>
                    <input
                      type="text"
                      id="otherHelpArea"
                      name="otherHelpArea"
                      value={formData.otherHelpArea}
                      onChange={handleChange}
                      placeholder="Please specify other ways KYD can help"
                      className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                )}
                {errors.helpAreas && (
                  <p className="mt-1 text-sm text-red-600">{errors.helpAreas}</p>
                )}
              </fieldset>
            </div>

            {/* Would you like a sample report? */}
            <div className="sm:col-span-2">
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                  Would you like a sample report? <span className="text-red-500">*</span>
                </legend>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="sample-yes"
                      name="sampleReport"
                      type="radio"
                      value="yes"
                      checked={formData.sampleReport === 'yes'}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="sample-yes" className="ml-3 block text-sm text-gray-700">
                      Yes, I&apos;d like to see a sample report
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="sample-no"
                      name="sampleReport"
                      type="radio"
                      value="no"
                      checked={formData.sampleReport === 'no'}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <label htmlFor="sample-no" className="ml-3 block text-sm text-gray-700">
                      No, not at this time
                    </label>
                  </div>
                </div>
                {errors.sampleReport && (
                  <p className="mt-1 text-sm text-red-600">{errors.sampleReport}</p>
                )}
              </fieldset>
            </div>

            {/* Message / Additional Info */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message / Additional Info
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Tell us about your specific needs or questions..."
                ></textarea>
              </div>
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacyConsent"
                    name="privacyConsent"
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={handleCheckboxChange}                      
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacyConsent" className="text-gray-700">
                    I agree to KYD&apos;s data collection practices and <button type="button" onClick={() => setIsPrivacyModalOpen(true)} className="text-indigo-600 hover:text-indigo-500 font-medium focus:outline-none focus:underline">Privacy Policy</button>.
                  </label>
                </div>
              </div>
              {errors.privacyConsent && (
                <p className="mt-1 text-sm text-red-600">{errors.privacyConsent}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
        
        <p className="mt-6 text-center text-sm text-indigo-200">
          We respect your privacy. Your information will not be shared with third parties.
        </p>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40 flex items-center justify-center p-4" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-2xl sm:w-full p-6">
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold text-gray-900" id="modal-title">
                    KYD Data Collection Practices
                </h3>
                <button 
                    type="button" 
                    onClick={() => setIsPrivacyModalOpen(false)} 
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    aria-label="Close modal"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="text-sm text-gray-600 space-y-3">
                <p>KYD collects the information you submit through this form for the purpose of qualifying interest in our services. In addition to the information you provide, we automatically collect the following session-level metadata:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Your IP address</li>
                    <li>Approximate geolocation (country, region, city)</li>
                    <li>Browser type and version</li>
                    <li>Device type (e.g., mobile, desktop)</li>
                    <li>Operating system</li>
                    <li>Preferred browser language</li>
                    <li>Referral URL</li>
                    <li>Time of submission (UTC)</li>
                </ul>
                <p>This information is used to protect against spam, understand who is contacting us, improve our marketing efforts, and deliver relevant responses to legitimate business contacts.</p>
                <p>All data is stored securely and is only accessible to authorized team members. We do not sell your personal information or share it with third parties without your consent.</p>
                <p>By submitting the form, you consent to this data collection as outlined. For more details, please refer to our Privacy Policy.</p>
            </div>
            <div className="mt-6 flex justify-end">
                <button 
                    type="button" 
                    onClick={() => setIsPrivacyModalOpen(false)} 
                    className="px-4 py-2 bg-indigo-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WaitlistSection;