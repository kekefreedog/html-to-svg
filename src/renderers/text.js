import $ from '../utils/dom-render-svg'
import fs from 'fs'
import path from 'path'

// Utility function to convert a font file to a Base64 string
const fontToBase64 = (filePath) => {
  const fontBuffer = fs.readFileSync(filePath)
  return fontBuffer.toString('base64')
}

const matchFont = s => ({ family, style = 'normal', weight = '400' } = {}) =>
  family === (s.getPropertyValue('font-family') ?? '').replace(/['"]/g, '') &&
    style === (s.getPropertyValue('font-style') ?? 'normal') &&
    weight === (s.getPropertyValue('font-weight') ?? '400')

export default ({ debug, fonts }) => async (string, { x, y, width, height, style }, {
  splitText = false
}) => {
  if (!string) return

  const g = $('g', { class: 'text-fragment' })

  // Find the font
  const font = fonts.find(matchFont(style))
  if (!font) throw new Error(`Cannot find font '${style.getPropertyValue('font-family')} ${style.getPropertyValue('font-style')} ${style.getPropertyValue('font-weight')}'`)

  // Convert the font file to Base64
  const fontBase64 = fontToBase64(path.join(__dirname, font.url))

  console.log(font)

  // Create a <style> element to embed the font in the SVG
  const styleElement = $('style', {}, g)
  styleElement.textContent = `
    @font-face {
      font-family: '${font.family}';
      src: url(data:font/ttf;base64,${fontBase64}) format('truetype');
      font-weight: ${font.weight};
      font-style: ${font.style};
    }
  `

  // Extract CSS properties
  const letterSpacing = style.getPropertyValue('letter-spacing')
  const fontSize = style.getPropertyValue('font-size')
  const fill = style.getPropertyValue('color')

  // Create a <text> element to render the text
  const textElement = $('text', {
    x: x,
    y: y,
    fill: fill,
    'font-family': font.family,
    'font-size': fontSize,
    'font-weight': style.getPropertyValue('font-weight'),
    'font-style': style.getPropertyValue('font-style'),
    'letter-spacing': letterSpacing === 'normal' ? '0' : letterSpacing,
    'dominant-baseline': 'hanging'
  }, g)

  textElement.textContent = string

  return g
}
