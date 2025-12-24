// Prompt asking Gemini to analyze the treadmill data and do the OCR
export const PROMPT = `
    Analise esta imagem do painel de uma esteira.
    Extraia: data (assuma hoje como data, formato ISO YYYY-MM-DD), distância (km), duração (minutos) e calorias (kcal).
    Retorne APENAS um objeto JSON seguindo esta estrutura exata, sem markdown:
    {
      id: (gere um UUID ou string única),
      date: (use a data de hoje),
      "date": "YYYY-MM-DD",
      "distanceKm": 0,
      "durationMinutes": 0,
      "caloriesKcal": 0,
      "paceMinPerKm": "00:00"
    }
` 