const costumeSource = "data-src"

const loadImage = (image: HTMLImageElement) => {
  image.src = image.getAttribute(costumeSource) as string
  image.removeAttribute(costumeSource)
  image.classList.remove("lazy")
}

const lazyLoadImages = () => {
  const DOMNodes = document.querySelectorAll("img.lazy")
  const lazyImages = Array.from(DOMNodes) as Array<HTMLImageElement>

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          loadImage(target as HTMLImageElement)
          lazyImageObserver.unobserve(target)
        }
      })
    })

    lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage))
  } else {
    lazyImages.forEach(image => loadImage(image))
  }
}

export default lazyLoadImages
