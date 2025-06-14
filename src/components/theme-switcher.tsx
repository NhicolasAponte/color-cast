"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon, Trees, Check } from "lucide-react"

const themes = [
  {
    name: "light",
    label: "Light",
    description: "Clean and bright interface",
    icon: Sun,
    preview: "bg-white border-gray-200",
  },
  {
    name: "dark",
    label: "Dark",
    description: "Easy on the eyes",
    icon: Moon,
    preview: "bg-gray-900 border-gray-700",
  },
  {
    name: "forest",
    label: "Forest",
    description: "Nature-inspired green theme",
    icon: Trees,
    preview: "bg-green-900 border-green-700",
  },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-foreground">Choose Theme</h3>
        <p className="text-sm text-muted-foreground">
          Select a theme to change the overall appearance of the application
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon
          const isActive = theme === themeOption.name

          return (
            <Card
              key={themeOption.name}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                isActive ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setTheme(themeOption.name)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full ${themeOption.preview} flex items-center justify-center`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-base">{themeOption.label}</CardTitle>
                  </div>
                  {isActive && (
                    <Badge variant="default" className="flex items-center space-x-1">
                      <Check className="h-3 w-3" />
                      <span>Active</span>
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">{themeOption.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <div className="w-4 h-4 rounded-full bg-muted"></div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
        <div>
          <p className="text-sm font-medium text-foreground">Current Theme</p>
          <p className="text-xs text-muted-foreground">{themes.find((t) => t.name === theme)?.label || "Unknown"}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const currentIndex = themes.findIndex((t) => t.name === theme)
            const nextIndex = (currentIndex + 1) % themes.length
            setTheme(themes[nextIndex].name)
          }}
        >
          Next Theme
        </Button>
      </div>
    </div>
  )
}
