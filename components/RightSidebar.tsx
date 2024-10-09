"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function RightSidebar() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      // Here you would typically call your AI service
      // For now, we'll just echo the message
      setTimeout(() => {
        setMessages(prev => [...prev, { text: `Echo: ${input}`, sender: 'ai' }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="w-80 bg-card text-card-foreground border-l flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">AI Assistant</h2>
      </div>
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
              {msg.text}
            </div>
            {msg.sender === 'ai' && (
              <Button variant="outline" size="sm" className="mt-2">
                Insert
              </Button>
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  )
}