import React, { useState } from 'react';

const DocumentCenter = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (selectedFile) {
      alert(`File "${selectedFile.name}" submitted for review (simulation).`);
      setSelectedFile(null);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-800">Document Center</h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-2 text-gray-700">Download Forms</h3>
        <ul className="list-disc list-inside space-y-2 text-blue-600">
          <li>
            <a href="/docs/proof-of-insurance.pdf" download className="hover:underline">
              Proof of Insurance
            </a>
          </li>
          <li>
            <a href="/docs/coi-request-form.pdf" download className="hover:underline">
              Certificate of Insurance Request Form
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2 text-gray-700">Upload Document</h3>
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="block border rounded p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentCenter;