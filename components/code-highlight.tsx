// components/CodeHighlight.tsx
import React from 'react'
import highlightCode from '../lib/prism'

interface CodeHighlightProps {
  code: string
  language: 'json' | 'xml'
}

export const CodeHighlight: React.FC<CodeHighlightProps> = ({
  code,
  language,
}) => {
  const highlightedCode = highlightCode(code, language)

  return (
    <pre className={`language-${language}`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  )
}
