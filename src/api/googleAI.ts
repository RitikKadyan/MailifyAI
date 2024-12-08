const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface BusinessInfo {
    name: string;
    industry: string;
    targetAudience: string;
    productDetails: string;
}

export const generateEmail = async (businessInfo: BusinessInfo): Promise<string> => {
    const prompt = `
Create a professional marketing email for a business named ${businessInfo.name} in the ${businessInfo.industry} industry. The target audience is ${businessInfo.targetAudience}. The product details are: ${businessInfo.productDetails}. 

Format the email with the following structure:
- **Subject:** [Compelling subject line]
- **Greeting:** Hi [Name],
- **Introduction:** Brief introduction about the business and product.
- **Features:** List key features and benefits.
- **Conclusion:** Call to action and contact information.
`;

    const result = await model.generateContent(prompt);
    return result.response.text().trim();
};
