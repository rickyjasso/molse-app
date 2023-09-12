import {Marker,  ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl ="https://gist.githubusercontent.com/diegovalle/5129746/raw/c1c35e439b1d5e688bca20b79f0e53a1fc12bf9e/mx_tj.json"

export default function MapChart() {

  const markers = [
    {
      markerOffset: -30,
      name: "Monterrey",
      coordinates: [-100.31333712082878, 25.70285508008985]
    },
    { markerOffsetX: 0, markerOffset: 15, name: "CDMX", coordinates: [-99.13322769245599, 19.435286136717796] },
    { markerOffsetX: -15, markerOffset: -30, name: "Guadalajara", coordinates: [-103.34880682896933, 20.659959416011468] },
    { markerOffsetX: 15, markerOffset: -30, name: "Queretaro", coordinates: [-100.39030857351007, 20.589300224112264] },
    { markerOffsetX: 0, markerOffset: 15, name: "Acapulco", coordinates: [-99.88085221753593, 16.86435927860148] },
    { markerOffsetX: 0, markerOffset: 15, name: "Tijuana", coordinates: [-116.93914445794728, 32.49547740447609] },
  ];
  

  return (
    <ComposableMap projection="geoAlbers"
    projectionConfig={{
      center:[-10, 22],
      scale: 1250
    }}>
{/*       <ZoomableGroup center={[0, 0]} zoom={1}>
 */}      <Geographies geography={geoUrl} >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#A59596"/>
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset, markerOffsetX }) => (
        <Marker key={name} coordinates={coordinates as [number, number]}>
          <g
            fill="none"
            stroke="#1F2859"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            x={markerOffsetX}
            style={{ fontFamily: "system-ui", fill: "black" }}
          >
            {name}
          </text>
        </Marker>
      ))}

{/*       </ZoomableGroup>
 */}    </ComposableMap>
  )
}
