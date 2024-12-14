import React, { useState } from 'react';
import BusinessForm from './components/BusinessForm.tsx';
import { generateEmail } from './api/googleAI.ts';
import { CircularProgress } from '@mui/material';
import './App.css';

const App: React.FC = () => {
    const [emailTemplate, setEmailTemplate] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (values: { name: string; industry: string; targetAudience: string; productDetails: string; }) => {
        setIsLoading(true); // Show loading spinner
        setEmailTemplate(''); // Clear previous email
        try {
            const emailContent = await generateEmail(values);
            setEmailTemplate(emailContent);
        } catch (error) {
            console.error('Error generating email:', error);
            setEmailTemplate('Failed to generate email. Please try again.');
        } finally {
            setIsLoading(false); // Hide loading spinner
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h1>Marketing Email Generator</h1>
                <BusinessForm onSubmit={handleSubmit} />
            </div>
            <div className="output-container">
                {isLoading ? (
                    <div className="loading-container">
                        <CircularProgress />
                        <p>Generating email, please wait...</p>
                    </div>
                ) : (
                    emailTemplate && (
                        <div>
                            <h2>Generated Email Template</h2>
                            <p>{emailTemplate}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default App;
