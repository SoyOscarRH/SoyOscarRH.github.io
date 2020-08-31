const navigateTo = (element: HTMLElement | null) => {
  if (!element) return

  const currentPosition = element.style.position
  const currentTop = element.style.top

  element.style.position = "relative"
  element.style.top = "-15rem"

  element.scrollIntoView({ behavior: "smooth", block: "start" })

  element.style.top = currentTop
  element.style.position = currentPosition
}

export default navigateTo
