"use client"

import { useState, useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { renderAsync } from 'docx-preview'

export default function MainArea() {
  const [content, setContent] = useState('')
  const [isWordDocument, setIsWordDocument] = useState(false)
  const containerRef = useRef(null)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (file.name.endsWith('.docx')) {
      setIsWordDocument(true)
      const arrayBuffer = await file.arrayBuffer()
      renderAsync(arrayBuffer, containerRef.current)
    } else {
      setIsWordDocument(false)
      // Handle other file types or show an error message
    }
  }

  const handleEditorChange = (newContent, editor) => {
    setContent(newContent)
  }

  return (
    <div className="flex-1 p-4">
      <input type="file" onChange={handleFileUpload} accept=".docx" />
      {isWordDocument ? (
        <div ref={containerRef} className="border p-4 mt-4 min-h-[500px]"></div>
      ) : (
        <Editor
          apiKey="your-tinymce-api-key"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
          value={content}
          onEditorChange={handleEditorChange}
        />
      )}
    </div>
  )
}