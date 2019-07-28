const lazyLoadImages = () => {
  const lazyImages = Array.from(document.querySelectorAll("img.lazy"))

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const lazyImage = entry.target as HTMLImageElement
        lazyImage.src = lazyImage.dataset.src as string
        lazyImage.classList.remove("lazy")
        lazyImageObserver.unobserve(lazyImage)
      })
    })

    lazyImages.forEach(lazyImage => lazyImageObserver.observe(lazyImage))
  }
}

export default lazyLoadImages