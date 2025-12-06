
import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "NeuroBot", a helpful, professional, and empathetic virtual assistant for "NeuroDiag Centre".
Your goal is to assist patients with:
1. Understanding common medical tests (e.g., MRI, CT Scan, Blood tests) and how to prepare for them (fasting, clothing, etc.).
2. Explaining basic medical terminology in simple terms.
3. Guiding them to book an appointment (remind them they can use the 'Book Appointment' page).

IMPORTANT RESTRICTIONS:
- DO NOT provide medical diagnoses.
- DO NOT interpret specific raw lab results for the patient; general normal ranges are okay but advise seeing a doctor.
- ALWAYS include a disclaimer if the user asks about symptoms: "I am an AI assistant, not a doctor. Please consult a healthcare professional for a diagnosis."
- Keep responses concise, warm, and professional.
`;

// Helper to get AI instance lazily
const getAI = () => {
  // Ensure we only access the environment variable when the function is called,
  // preventing crashes during module initialization if process is undefined.
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const createChatSession = (): Chat => {
  const ai = getAI();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  return await chat.sendMessageStream({ message });
};
