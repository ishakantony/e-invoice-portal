// lib/prism.ts
import 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-xml-doc'
import './prism-vsc-dark-plus.css' // Import the Prism CSS theme you want to use

const highlightCode = (code: string, language: 'json' | 'xml'): string => {
  const Prism = require('prismjs')
  return Prism.highlight(code, Prism.languages[language], language)
}

export default highlightCode
