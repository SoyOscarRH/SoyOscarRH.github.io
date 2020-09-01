const speedTyping = 10
const speedNewLine = 600

const printInDOMNode = (DOMNode: HTMLElement, Text: Array<string>) => {
  let textPosition = 0
  let lineSize = Text[0].length
  let index = 0
  let contents = ""
  let row = 0
  let continueMessage = true

  const typeText = () => {
    if (!continueMessage) return
    contents = ""

    row = Math.max(0, index - 6)
    while (row < index) contents += Text[row++] + "\r\n"
    DOMNode.innerText = contents + Text[index].substring(0, textPosition) + "_"

    if (textPosition++ === lineSize) {
      textPosition = 0
      index++
      if (index !== Text.length) {
        lineSize = Text[index].length
        setTimeout(typeText, speedNewLine)
      }
    } else setTimeout(typeText, speedTyping)
  }
  typeText()

  const stopWriting = () => {
    continueMessage = false
  }
  return stopWriting
}

export default printInDOMNode
