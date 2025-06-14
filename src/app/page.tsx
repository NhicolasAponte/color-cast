"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Palette, Code, Zap } from "lucide-react"
import { SettingsModal } from "@/components/settings-modal"

export default function Home() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background transition-colors">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Palette className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Theme Editor Pro</h1>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center space-x-2"
          >
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Settings</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Real-time Theme Customization
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              Design System
              <span className="text-primary block">Playground</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiment with colors, themes, and design tokens in real-time. Create beautiful, consistent designs with
              instant visual feedback.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Get Started</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>View Code</span>
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Live Color Editing</CardTitle>
              <CardDescription>
                Edit CSS custom properties in real-time and see changes instantly across your entire design system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-2 bg-primary rounded-full"></div>
                <div className="h-2 bg-accent rounded-full"></div>
                <div className="h-2 bg-muted rounded-full"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Multiple Themes</CardTitle>
              <CardDescription>
                Switch between light, dark, and custom themes. Each theme maintains its own set of customizable
                variables.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-background border-2 border-border"></div>
                <div className="w-8 h-8 rounded-full bg-foreground"></div>
                <div className="w-8 h-8 rounded-full bg-green-600"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-ring/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-ring" />
              </div>
              <CardTitle>Instant Feedback</CardTitle>
              <CardDescription>
                See your changes applied immediately across all components. No refresh needed, no build step required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-muted-foreground">Real-time updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-muted-foreground">Persistent storage</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Demo Components */}
        <section className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Component Preview</h3>
            <p className="text-muted-foreground">See how your theme changes affect different UI components</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sample Form</CardTitle>
                <CardDescription>Form elements using theme colors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground"
                  />
                </div>
                <Button className="w-full">Submit</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Swatches</CardTitle>
                <CardDescription>Current theme color palette</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3">
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-primary rounded-md"></div>
                    <span className="text-xs text-muted-foreground">Primary</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-accent rounded-md"></div>
                    <span className="text-xs text-muted-foreground">Accent</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-muted rounded-md"></div>
                    <span className="text-xs text-muted-foreground">Muted</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-card border border-border rounded-md"></div>
                    <span className="text-xs text-muted-foreground">Card</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SettingsModal open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
    </div>
  )
}
