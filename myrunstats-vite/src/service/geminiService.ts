import { GoogleGenerativeAI } from '@google/generative-ai'
import { PROMPT } from '../utils/types/prompt'
import type { RunData } from '../utils/types/run'
  
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(API_KEY)

// Auxiliary function to convert a base64 image string to a generative part
function fileToGenerativePart(base64String: string, mimeType: string) {
  return {
    inlineData: {
      data: base64String.split(',')[1], // Remove o prefixo "data:image/jpeg;base64,"
      mimeType
    },
  }
}

export async function analyzeRunImage(base64Image: string): Promise<RunData | null> {
  try {
      // Configures the Gemini model to response with JSON format
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",  // Has to be "gemini-1.5-flash" to support image inputs
      generationConfig: { responseMimeType: "application/json" } 
    })

    const prompt = PROMPT

    const imagePart = fileToGenerativePart(base64Image, "image/jpeg") // Adjust the mimeType as needed

    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    const text = response.text()
    const data: RunData = JSON.parse(text)

    const id = crypto.randomUUID()
    data.id = id
    
    const pace = data.distanceKm > 0 ? (data.durationMinutes / data.distanceKm) : 0

    const minutes = Math.floor(pace)
    const seconds = Math.round((pace % 1) * 60).toString().padStart(2, '0')
    data.paceMinPerKm = `${minutes}:${seconds}`

    const todayDate = new Date().toISOString().split('T')[0]
    data.date = todayDate

    return data

  } catch (error) {
    console.error("Erro no serviço Gemini:", error)
    return null
  }
}