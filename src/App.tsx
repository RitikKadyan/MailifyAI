import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm.tsx';
import { generateEmail } from './api/googleAI.ts';
import './App.css';

const App: React.FC = () => {
    const [emailTemplate, setEmailTemplate] = useState<string>('');

    const handleSubmit = async (values: { name: string; industry: string; targetAudience: string; productDetails: string; }) => {
        const emailContent = await generateEmail(values);
        setEmailTemplate(emailContent);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Marketing Email Generator</h1>
                <BusinessForm onSubmit={handleSubmit} />
            </div>
            <div className="output-container">
                {emailTemplate && (
                    <div>
                        <h2>Generated Email Template</h2>
                        <p>{emailTemplate}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
