"use client"

import { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import MainArea from './MainArea'
import RightSidebar from './RightSidebar'
import HelpDialog from './HelpDialog'
import SettingsMenu from './SettingsMenu'

export default function DocumentEditor() {
  const [showHelpDialog, setShowHelpDialog] = useState(false)
  const [showSettingsMenu, setShowSettingsMenu] = useState(false)

  return (
    <>
      <LeftSidebar 
        onHelpClick={() => setShowHelpDialog(true)}
        onSettingsClick={() => setShowSettingsMenu(true)}
      />
      <MainArea />
      <RightSidebar />
      <HelpDialog open={showHelpDialog} onOpenChange={setShowHelpDialog} />
      <SettingsMenu open={showSettingsMenu} onOpenChange={setShowSettingsMenu} />
    </>
  )
}