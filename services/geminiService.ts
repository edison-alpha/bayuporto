
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Bayu Mukti Wibowo, a world-class Full Stack Web Developer.
Your goal is to represent Bayu and answer questions about his skills, experience, and projects.

Bayu's Profile:
- Name: Bayu Mukti Wibowo
- Role: Senior Full Stack Web Developer
- Expertise: Frontend (React, TypeScript, Next.js, Three.js), Backend (Node.js, Python, Go, SQL/NoSQL), DevOps (Docker, AWS, Kubernetes).
- Style: Clean, scalable, and user-friendly web applications.
- Experience: 5+ years, 120+ projects, 30+ global clients.
- Location: Indonesia (Remote Available)

Keep your responses professional, friendly, and slightly enthusiastic. 
If asked about contact details, mention the buttons on the page or ask them to use the contact form.
Keep responses concise (max 3 sentences).
`;

export const askGemini = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my brain right now. Please reach out to Bayu directly!";
  }
};
