const h = (text, level = 1) => `${'#'.repeat(level)} ${text}`

const table = (matrix, withHeading = true) => {
  const table = matrix.map(line => `| ${line.join(' | ')} |`)

  if (withHeading) {
    return connectLines([
      table[0],
      `| ${new Array(matrix[0].length).fill('-').join(' | ')} |`,
      ...table.slice(1),
    ])
  }

  return connectLines(table)
}

const img = (src, altText) => `![${altText}](${src})`

const a = (href, text) => `[${text ? text : href}](${href})`

const ul = items => connectLines(items.map(item => `* ${item}`))

const ol = items =>
  connectLines(items.map((item, index) => `${index}. ${item}`))

const b = text => `**${text}**`

const connectLines = lines => lines.join('\n')

module.exports = {
  h,
  table,
  img,
  a,
  ul,
  b,
  connectLines,
}
