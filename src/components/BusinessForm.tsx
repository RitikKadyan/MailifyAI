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
        name: Yup.string().required('Required'),
        industry: Yup.string().required('Required'),
        targetAudience: Yup.string().required('Required'),
        productDetails: Yup.string().required('Required'),
    });

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div>
                    <label htmlFor="name">Business Name</label>
                    <Field name="name" type="text" className="short-input" />
                    <ErrorMessage name="name" />
                </div>
                <div>
                    <label htmlFor="industry">Industry</label>
                    <Field name="industry" type="text" className="short-input" />
                    <ErrorMessage name="industry" />
                </div>
                <div>
                    <label htmlFor="targetAudience">Target Audience</label>
                    <Field name="targetAudience" type="text" className="short-input" />
                    <ErrorMessage name="targetAudience" />
                </div>
                <div>
                    <label htmlFor="productDetails">Product Details</label>
                    <Field name="productDetails" as="textarea" className="tall-input" />
                    <ErrorMessage name="productDetails" />
                </div>
                <button type="submit">Generate Email</button>
            </Form>
        </Formik>
    );
};

export default BusinessForm;
