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

  // Extract font metrics
  const { unitsPerEm } = font.opentype
  const ascender = font.opentype.tables.hhea.ascender
  const descender = font.opentype.tables.hhea.descender

  // Extract CSS props
  const letterSpacing = style.getPropertyValue('letter-spacing')
  const fontSize = parseFloat(style.getPropertyValue('font-size'))
  const fill = style.getPropertyValue('color')

  // Compute metrics
  const lineBox = (ascender - descender) / unitsPerEm
  const leading = (fontSize * lineBox) - Math.abs(descender / unitsPerEm) * fontSize

  // Render various metrics for debug
  line('start', 0, { orientation: 'vertical', stroke: 'red' })
  line('end', width, { orientation: 'vertical', stroke: 'red' })
  line('leading', leading, { stroke: '#4b96ff' })

  // Extract CSS props

  // Create a <text> element instead of vectorizing the text
  const textElement = $('text', {
    x: x,
    y: y + leading,
    fill: fill,
    'font-family': style.getPropertyValue('font-family').replace(/['"]/g, ''), // Remove quotes
    'font-size': fontSize,
    'font-weight': style.getPropertyValue('font-weight'),
    'font-style': style.getPropertyValue('font-style'),
    'letter-spacing': letterSpacing === 'normal' ? '0' : letterSpacing,
    'dominant-baseline': 'auto' // Adjust to align text correctly
  }, g)

  textElement.textContent = string

  return g

  function line (title, v, { orientation = 'horizontal', stroke = 'black' } = {}) {
    return debug && $('line', {
      title,
      'data-value': v,
      x1: orientation === 'horizontal' ? x : x + v,
      x2: orientation === 'horizontal' ? x + width : x + v,
      y1: orientation === 'horizontal' ? y + v : y,
      y2: orientation === 'horizontal' ? y + v : y + height,
      stroke,
      class: 'debug'
    }, g)
  }
}
