import React, { useEffect, useRef } from "react"
import * as Styles from "./Styles.css"

// @ts-ignore
const googleMaps = google.maps

const Maps: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const DOM_NODE = mapRef.current
    new googleMaps.Map(DOM_NODE, {
      center: { lat: 37.422, lng: -122.084 },
      zoom: 16,
    })
  }, [])

  return (
    <section className={`${Styles.container} center-align blue-grey-text text-darken-3`}>
      <h4>
        <b>Places I needed to go before I die</b>
      </h4>
      <br />

      <div className={`${Styles.maps} z-depth-1`} ref={mapRef} />
    </section>
  )
}

export default Maps
