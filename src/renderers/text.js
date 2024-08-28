import $ from '../utils/dom-render-svg'

const matchFont = s => ({ family, style = 'normal', weight = '400' } = {}) =>
  family === (s.getPropertyValue('font-family') ?? '').replace(/['"]/g, '') &&
    style === (s.getPropertyValue('font-style') ?? 'normal') &&
    weight === (s.getPropertyValue('font-weight') ?? '400')

export default ({ debug, fonts }) => async (string, { x, y, width, height, style }, {
  splitText = false
}) => {
  if (!string) return

  const g = $('g', { class: 'text-fragment' })

  // Find font
  const font = fonts.find(matchFont(style))
  if (!font) throw new Error(`Cannot find font '${style.getPropertyValue('font-family')} ${style.getPropertyValue('font-style')} ${style.getPropertyValue('font-weight')}'`)

  // Extract CSS props
  const letterSpacing = style.getPropertyValue('letter-spacing')
  const fontSize = style.getPropertyValue('font-size')
  const fill = style.getPropertyValue('color')

  // Create a <text> element instead of vectorizing the text
  const textElement = $('text', {
    x: x,
    y: y,
    fill: fill,
    'font-family': style.getPropertyValue('font-family').replace(/['"]/g, ''), // Remove quotes
    'font-size': fontSize,
    'font-weight': style.getPropertyValue('font-weight'),
    'font-style': style.getPropertyValue('font-style'),
    'letter-spacing': letterSpacing === 'normal' ? '0' : letterSpacing,
    'dominant-baseline': 'hanging' // Adjust to align text correctly
  }, g)

  textElement.textContent = string

  return g
}
