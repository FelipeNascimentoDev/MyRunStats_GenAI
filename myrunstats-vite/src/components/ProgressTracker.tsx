import { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { analyzeRunImage } from "../service/geminiService"
import type { RunData } from "../utils/types/run"
import { RunCharts } from "./RunCharts"

function ProgressTracker() {
  const location = useLocation()

  const [history, setHistory] = useState<RunData[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Ref to avoid double call in React Strict Mode (development)
  const processedRef = useRef(false)

  useEffect(() => {
    // Function to load history from localStorage
    const loadHistory = () => {
      const savedHistory = JSON.parse(localStorage.getItem('runHistory') || '[]')
      setHistory(savedHistory)
    }

    const processImage = async () => {
      const imageData = location.state?.imageData

      if (imageData && !processedRef.current) {
        processedRef.current = true
        setLoading(true)

        const result = await analyzeRunImage(imageData)

        if (result) {
          // Get the existing history, add the new run, and save it back
          const currentHistory = JSON.parse(localStorage.getItem('runHistory') || '[]')
          const updatedHistory = [result, ...currentHistory] // New item first (descending order)
          
          localStorage.setItem('runHistory', JSON.stringify(updatedHistory))
          setHistory(updatedHistory) // Update the screen with the new history
        } else {
          alert("We couldn't analyze the image. Please try again.")
          loadHistory() // Even if it fails, load what already existed
        }
        setLoading(false)
      } else {
        // If there is no new image, just load what is already in the local storage
        loadHistory()
      }
    }

    processImage()
  }, [location.state])

  // --- Loading Render ---
  if (loading) {
    return (
      <div className="w-screen h-screen bg-[rgb(51,51,51)] flex flex-col justify-center items-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[rgb(50,255,170)] mb-4"></div>
        <h2 className="text-xl animate-pulse text-[rgb(50,255,170)]">Analyzing your run with AI...</h2>
      </div>
    )
  }

  // --- [Main Render] ---
  return (
    <div className="min-h-screen w-full bg-[rgb(51,51,51)] text-white">
      
      <div className="text-center pt-10">
        <h1 className="text-[rgb(150,150,150)] font-semibold text-4xl">
          Progress Tracker
        </h1>
      </div>

      <div className="bg-black mx-10 my-10 py-1"></div>

      <div className="flex flex-col items-center mx-4 md:mx-10">
      {history.length > 0 ? (
        /* Container que habilita o scroll horizontal */
        <div className="w-full md:w-3/4 overflow-x-auto shadow-lg rounded-xl border border-gray-600 mb-10">
          <table className="w-full text-center min-w-150">
            <thead className="bg-[rgb(50,255,170)] text-[rgb(51,51,51)]">
              <tr>
                <th className="px-4 py-3 font-bold whitespace-nowrap">Date</th>
                <th className="px-4 py-3 font-bold whitespace-nowrap">Distance (km)</th>
                <th className="px-4 py-3 font-bold whitespace-nowrap">Duration (min)</th>
                <th className="px-4 py-3 font-bold whitespace-nowrap">Calories (kcal)</th>
                <th className="px-4 py-3 font-bold whitespace-nowrap">Pace (min/km)</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black divide-y divide-gray-200">
              {history.map((run) => (
                <tr key={run.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap">{run.date}</td>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{run.distanceKm}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{run.durationMinutes}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{run.caloriesKcal}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{run.paceMinPerKm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        ) : (
          <div className="text-gray-400 text-xl border border-dashed border-gray-600 p-10 rounded-lg">
            No data available. Go back and upload a photo!
          </div>
        )}
      </div>

        <div className="flex text-center justify-center w-full overflow-x-auto">
          <RunCharts history={history} />
        </div>

    </div>
  )
}

export default ProgressTracker