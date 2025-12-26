import { Bar, BarChart, CartesianGrid, XAxis, Area, AreaChart, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { RunData } from "@/utils/types/run"

interface RunChartsProps {
  history: RunData[]
}

const chartConfig = {
  distance: {
    label: "Distância",
    color: "rgb(50, 255, 170)",
  },
  calories: {
    label: "Calorias",
    color: "#60a5fa",
  },
  pace: {
    label: "Pace",
    color: "#f87171",
  },
} satisfies ChartConfig

export function RunCharts({ history }: RunChartsProps) {
  
  const chartData = [...history].reverse().map((run) => {
    const [min, sec] = run.paceMinPerKm.split(":").map(Number);
    const paceDecimal = min + (sec / 60);

    return {
      ...run,
      pace: parseFloat(paceDecimal.toFixed(2)),
      displayDate: new Date(run.date + 'T12:00:00').toLocaleDateString('pt-BR', {  // Fixes timezone issues
        day: '2-digit', 
        month: '2-digit' 
      })
    };
  });

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto mb-10 mt-6 px-4">
      
      {/* Gráfico 1: Distância (Barras) */}
      <Card className="bg-[rgb(40,40,40)] border-gray-700 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-[rgb(50,255,170)]">Volume de Distância</CardTitle>
          <CardDescription className="text-gray-400">Km percorridos por sessão</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-50 w-full">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#444" />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <XAxis dataKey="displayDate" tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="distanceKm" fill={chartConfig.distance.color} radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Gráfico 2: Evolução do Pace (Área/Linha) */}
      <Card className="bg-[rgb(40,40,40)] border-gray-700 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-red-400">Evolução do Pace</CardTitle>
          <CardDescription className="text-gray-400">Ritmo médio (min/km) - Quanto menor, melhor</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-50 w-full">
            <AreaChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#444" />
              <YAxis tickLine={false} axisLine={false} tickMargin={10} />
              <XAxis dataKey="displayDate" tickLine={false} axisLine={false} tickMargin={10} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area 
                type="monotone" 
                dataKey="pace" 
                stroke={chartConfig.pace.color} 
                fill={chartConfig.pace.color} 
                fillOpacity={0.2} 
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

    </div>
  )
}