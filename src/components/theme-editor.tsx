"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RotateCcw, Copy, Check } from "lucide-react"

const colorTokens = [
  { name: "background", label: "Background", description: "Main background color" },
  { name: "foreground", label: "Foreground", description: "Main text color" },
  { name: "primary", label: "Primary", description: "Primary brand color" },
  { name: "accent", label: "Accent", description: "Accent color for highlights" },
  { name: "muted", label: "Muted", description: "Muted background color" },
  { name: "card", label: "Card", description: "Card background color" },
  { name: "border", label: "Border", description: "Border color" },
  { name: "ring", label: "Ring", description: "Focus ring color" },
]

const defaultColors = {
  light: {
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    primary: "221.2 83.2% 53.3%",
    accent: "210 40% 96%",
    muted: "210 40% 96%",
    card: "0 0% 100%",
    border: "214.3 31.8% 91.4%",
    ring: "221.2 83.2% 53.3%",
  },
  dark: {
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    primary: "217.2 91.2% 59.8%",
    accent: "217.2 32.6% 17.5%",
    muted: "217.2 32.6% 17.5%",
    card: "222.2 84% 4.9%",
    border: "217.2 32.6% 17.5%",
    ring: "224.3 76.3% 94.1%",
  },
  forest: {
    background: "120 20% 8%",
    foreground: "120 15% 95%",
    primary: "142 76% 36%",
    accent: "120 25% 15%",
    muted: "120 25% 15%",
    card: "120 20% 10%",
    border: "120 25% 20%",
    ring: "142 76% 36%",
  },
}

export function ThemeEditor() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [colors, setColors] = useState<Record<string, string>>({})
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !theme) return

    // Load colors from localStorage or use defaults
    const savedColors = localStorage.getItem(`theme-colors-${theme}`)
    if (savedColors) {
      setColors(JSON.parse(savedColors))
    } else {
      setColors(defaultColors[theme as keyof typeof defaultColors] || defaultColors.light)
    }
  }, [theme, mounted])

  const updateColor = (token: string, value: string) => {
    if (!theme) return

    const newColors = { ...colors, [token]: value }
    setColors(newColors)

    // Update CSS custom property
    document.documentElement.style.setProperty(`--${token}`, value)

    // Save to localStorage
    localStorage.setItem(`theme-colors-${theme}`, JSON.stringify(newColors))
  }

  const resetToDefaults = () => {
    if (!theme) return

    const defaults = defaultColors[theme as keyof typeof defaultColors] || defaultColors.light
    setColors(defaults)

    // Update all CSS custom properties
    Object.entries(defaults).forEach(([token, value]) => {
      document.documentElement.style.setProperty(`--${token}`, value)
    })

    // Clear localStorage
    localStorage.removeItem(`theme-colors-${theme}`)
  }

  const copyColor = async (token: string, value: string) => {
    try {
      await navigator.clipboard.writeText(`hsl(${value})`)
      setCopiedToken(token)
      setTimeout(() => setCopiedToken(null), 2000)
    } catch (err) {
      console.error("Failed to copy color:", err)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground">Color Editor</h3>
          <p className="text-sm text-muted-foreground">
            Customize colors for the <Badge variant="outline">{theme}</Badge> theme
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={resetToDefaults} className="flex items-center space-x-2">
          <RotateCcw className="h-4 w-4" />
          <span>Reset</span>
        </Button>
      </div>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colorTokens.map((token) => (
          <Card key={token.name} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-sm font-medium">{token.label}</CardTitle>
                  <CardDescription className="text-xs">{token.description}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-8 h-8 rounded-md border border-border shadow-sm"
                    style={{ backgroundColor: `hsl(${colors[token.name] || "0 0% 50%"})` }}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyColor(token.name, colors[token.name] || "")}
                    className="h-8 w-8 p-0"
                  >
                    {copiedToken === token.name ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2">
                <Label htmlFor={token.name} className="text-xs font-medium text-muted-foreground">
                  HSL Value
                </Label>
                <Input
                  id={token.name}
                  value={colors[token.name] || ""}
                  onChange={(e) => updateColor(token.name, e.target.value)}
                  placeholder="0 0% 50%"
                  className="font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-sm">Preview</CardTitle>
          <CardDescription className="text-xs">See how your colors look in context</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Button size="sm">Primary Button</Button>
            <Button variant="outline" size="sm">
              Outline Button
            </Button>
            <Button variant="ghost" size="sm">
              Ghost Button
            </Button>
          </div>
          <div className="p-3 bg-card border border-border rounded-md">
            <p className="text-sm text-foreground">This is a card with border</p>
            <p className="text-xs text-muted-foreground mt-1">Muted text example</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
