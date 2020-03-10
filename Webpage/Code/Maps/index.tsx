import React, { useEffect, useRef, useReducer } from "react"
import darkModeStyles from "./darkModeStyles"

import * as Styles from "./Styles.css"

// @ts-ignore
const googleMaps = google.maps

function panTo(map: any, newLat: number, newLng: number) {
  const panPath = [] as Array<[number, number]>
  const panQueue = [] as Array<[number, number]>
  const STEPS = 20

  function doPan() {
    var next = panPath.shift()
    if (next != null) {
      map.panTo(new googleMaps.LatLng(next[0], next[1]))
      setTimeout(doPan, 20)
    } else {
      var queued = panQueue.shift()
      if (queued != null) {
        googleMaps
        panTo(map, queued[0], queued[1])
      }
    }
  }

  if (panPath.length > 0) {
    panQueue.push([newLat, newLng])
  } else {
    panPath.push([0, 0])
    var curLat = map.getCenter().lat()
    var curLng = map.getCenter().lng()
    var dLat = (newLat - curLat) / STEPS
    var dLng = (newLng - curLng) / STEPS

    for (var i = 0; i < STEPS; i++) {
      panPath.push([curLat + dLat * i, curLng + dLng * i])
    }
    panPath.push([newLat, newLng])
    panPath.shift()
    setTimeout(doPan, 20)
  }
}

const places = [
  { position: { lat: 37.422, lng: -122.084 }, title: "Googleplex" },
  { position: { lat: 19.6923, lng: -98.8435 }, title: "Piramid of the Sun" },
  { position: { lat: 40.4169, lng: -3.7035 }, title: "Door of the Sun" },
  { position: { lat: 41.8902, lng: 12.4922 }, title: "Colosseum" },
  { position: { lat: -20.2824, lng: 149.0389 }, title: "Whitehaven Beach" },
  { position: { lat: 52.9715, lng: -9.4309 }, title: "Cliffs of Moher" },
  { position: { lat: 25.6872, lng: 32.6396 }, title: "Luxor" },
]

const Maps: React.FC = () => {
  const mapDOMNode = useRef<HTMLDivElement>(null)
  const mapRef = useRef(null)

  const [_, update] = useReducer((actual: number, action: "next" | "prev") => {
    const n = places.length - 1
    let future = actual

    if (action === "next") future = actual === n ? 0 : actual + 1
    if (action === "prev") future = actual === 0 ? n : actual - 1

    const { lat, lng } = places[future].position

    panTo(mapRef.current, lat, lng)

    return future
  }, 0)

  useEffect(() => {
    const DOM_NODE = mapDOMNode.current

    const map = new googleMaps.Map(DOM_NODE, {
      center: { lat: 37.422, lng: -122.084 },
      zoom: 5,
      styles: darkModeStyles,
    })

    mapRef.current = map

    places.forEach(({ position, title }) => {
      const marker = new googleMaps.Marker({
        position,
        map,
        label: {
          color: "white",
          fontWeight: "bold",
          text: title,
        },
      })
      marker.addListener("click", function() {
        map.setZoom(14)
        map.setCenter(marker.getPosition())
      })
    })
  }, [])

  return (
    <section className={`${Styles.container} center-align blue-grey-text text-darken-3`}>
      <h4>
        <b>Places I need to go before I die</b>
      </h4>
      <br />

      <div className={`${Styles.maps} z-depth-1`} ref={mapDOMNode} />
      <div className={Styles.buttons}>
        <button onClick={() => update("prev")} className="btn waves-effect waves-light">
          Previous place
        </button>
        <button onClick={() => update("next")} className="btn waves-effect waves-light">
          Next place
        </button>
      </div>
    </section>
  )
}

export default Maps
