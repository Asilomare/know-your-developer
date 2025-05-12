import React from 'react';

const InfoModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-40 flex items-center justify-center p-4" 
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
      onClick={onClose} // Close modal if overlay is clicked
    >
      <div 
        className="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-2xl sm:w-full p-6"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
                {title}
            </h3>
            <button 
                type="button" 
                onClick={onClose} 
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                aria-label="Close modal"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        <div className="text-sm text-gray-600 space-y-3">
            {children}
        </div>
        <div className="mt-6 flex justify-end">
            <button 
                type="button" 
                onClick={onClose} 
                className="px-4 py-2 bg-indigo-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal; 