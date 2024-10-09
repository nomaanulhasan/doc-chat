"use client"

import { FileText, FileSearch, HelpCircle, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './ModeToggle'

export default function LeftSidebar({ onHelpClick, onSettingsClick }) {
  return (
    <div className="w-64 bg-card text-card-foreground border-r flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">DocAI</h1>
      </div>
      <nav className="flex-1">
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Drafting of Documents
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FileSearch className="mr-2 h-4 w-4" />
          Case Summarization
        </Button>
      </nav>
      <div className="p-4 mt-auto">
        <ModeToggle />
        <Button variant="ghost" className="w-full justify-start mt-2" onClick={onHelpClick}>
          <HelpCircle className="mr-2 h-4 w-4" />
          Help
        </Button>
        <Button variant="ghost" className="w-full justify-start" onClick={onSettingsClick}>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}