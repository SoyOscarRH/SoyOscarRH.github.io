const printInDOMNode = (DOMNode: HTMLElement, Text: Array<string>) => {
  const textToShow = Text
  const speedTyping = 70,
    speedNewLine = 600
  let textPosition = 0,
    lineSize = textToShow[0].length
  let index = 0,
    contents = "",
    row = 0
  let continueMessage = true

  const typeText = () => {
    if (!continueMessage) return
    contents = ""

    row = Math.max(0, index - 6)
    while (row < index) contents += Text[row++] + "\r\n"
    DOMNode.innerText = contents + Text[index].substring(0, textPosition) + "_"

    if (textPosition++ == lineSize) {
      textPosition = 0
      index++
      if (index != Text.length) {
        lineSize = Text[index].length
        setTimeout(typeText, speedNewLine)
      }
    } else setTimeout(typeText, speedTyping)
  }

  typeText()

  return () => {
    continueMessage = false
  }
}

export default printInDOMNode
