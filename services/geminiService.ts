import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;

export const generateSpeakerNotes = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    console.error("API Key not found");
    return "Error: API Key is missing. Cannot generate notes.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    // Using flash model for speed
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an assistant for a student presenting a comparison between Windows and Linux. 
      The student loves Arch Linux and i3wm. 
      Write a short, punchy paragraph (approx 50-80 words) of speaker notes for the following slide topic. 
      Keep the tone confident and slightly technical.
      
      Topic/Instruction: ${prompt}`,
    });

    return response.text || "No notes generated.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error connecting to AI service. Please check your network or API key.";
  }
};