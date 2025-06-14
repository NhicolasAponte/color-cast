"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { ThemeEditor } from "@/components/theme-editor"
import { Palette, Settings } from "lucide-react"

interface SettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SettingsModal({ open, onOpenChange }: SettingsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Theme Settings</span>
          </DialogTitle>
          <DialogDescription>Customize your theme and edit color tokens in real-time</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="switcher" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="switcher" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Theme Switcher</span>
            </TabsTrigger>
            <TabsTrigger value="editor" className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span>Color Editor</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="switcher" className="mt-6">
            <ThemeSwitcher />
          </TabsContent>

          <TabsContent value="editor" className="mt-6">
            <ThemeEditor />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
