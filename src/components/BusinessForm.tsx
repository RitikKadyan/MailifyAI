import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface BusinessFormProps {
    onSubmit: (values: BusinessInfo) => void;
}

interface BusinessInfo {
    name: string;
    industry: string;
    targetAudience: string;
    productDetails: string;
}

const BusinessForm: React.FC<BusinessFormProps> = ({ onSubmit }) => {
    const initialValues: BusinessInfo = { name: '', industry: '', targetAudience: '', productDetails: '' };
    const validationSchema = Yup.object({
        name: Yup.string(),
        industry: Yup.string(),
        targetAudience: Yup.string(),
        productDetails: Yup.string()
    });

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div>
                    <label htmlFor="name">Business Name<span style={{ color: 'red' }}>*</span></label>
                    <Field 
                        name="name" 
                        type="text" 
                        className="short-input" 
                        placeholder="Enter your business name" 
                    />
                    <ErrorMessage name="name" />
                </div>
                <div>
                    <label htmlFor="industry">Industry<span style={{ color: 'red' }}>*</span></label>
                    <Field 
                        name="industry" 
                        type="text" 
                        className="short-input" 
                        placeholder="Enter your industry(Ex. Finance, Trucking, Food, Healthcare)" 
                    />
                    <ErrorMessage name="industry" />
                </div>
                <div>
                    <label htmlFor="targetAudience">Target Audience<span style={{ color: 'red' }}>*</span></label>
                    <Field 
                        name="targetAudience" 
                        type="text" 
                        className="short-input" 
                        placeholder="Describe your customer" 
                    />
                    <ErrorMessage name="targetAudience" />
                </div>
                <div>
                    <label htmlFor="productDetails">Product Details<span style={{ color: 'red' }}>*</span></label>
                    <Field 
                        name="productDetails" 
                        as="textarea" 
                        className="tall-input" 
                        placeholder="Provide details about your product or service" 
                    />
                    <ErrorMessage name="productDetails" />
                </div>
                <button type="submit">Generate Email</button>
            </Form>
        </Formik>
    );
};

export default BusinessForm;
