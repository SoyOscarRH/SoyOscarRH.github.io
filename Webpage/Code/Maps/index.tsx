import React, { useEffect, useRef, useReducer } from "react"
import * as Styles from "./Styles.css"

// @ts-ignore
const googleMaps = google.maps

const darkModeStyles = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
]

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
  { position: { lat: 0, lng: 0 }, title: "Ocean" },
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
      darkModeStyles,
    })

    mapRef.current = map

    places.forEach(({ position, title }) => {
      new googleMaps.Marker({ position, map, title })
    })
  }, [])

  return (
    <section className={`${Styles.container} center-align blue-grey-text text-darken-3`}>
      <h4>
        <b>Places I needed to go before I die</b>
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
