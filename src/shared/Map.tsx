import {Marker,  ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl ="https://gist.githubusercontent.com/diegovalle/5129746/raw/c1c35e439b1d5e688bca20b79f0e53a1fc12bf9e/mx_tj.json"

export default function MapChart() {

  const markers = [
    {
      markerOffset: -30,
      name: "MTY",
      coordinates: [-100.31333712082878, 25.70285508008985]
    },
    { markerOffsetX: 0, markerOffset: 15, name: "CDMX", coordinates: [-99.13322769245599, 19.435286136717796] },
    { markerOffsetX: -15, markerOffset: -30, name: "GDL", coordinates: [-103.34880682896933, 20.659959416011468] },
    { markerOffsetX: 15, markerOffset: -30, name: "QRO", coordinates: [-100.39030857351007, 20.589300224112264] },
    { markerOffsetX: 0, markerOffset: 15, name: "ACP", coordinates: [-99.88085221753593, 16.86435927860148] },
    { markerOffsetX: 0, markerOffset: 15, name: "TIJ", coordinates: [-116.93914445794728, 32.49547740447609] },
    { markerOffsetX: 0, markerOffset: 15, name: "HMO", coordinates: [-110.95654614321226, 29.07560503016933] },
    { markerOffsetX: 0, markerOffset: 15, name: "AGS", coordinates: [-102.21087277281784, 22.03049257146035] },
    { markerOffsetX: 0, markerOffset: 15, name: "SAL", coordinates: [-100.97372316983859, 25.43821488280707 ] }

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
            <Geography key={geo.rsmKey} geography={geo} fill="#1F2859"style={{
              default: { outline: "none" },
              hover: { outline: "none" },
              pressed: { outline: "none" },
            }}/>
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset, markerOffsetX }) => (
        <Marker key={name} coordinates={coordinates as [number, number]}>
          <g
            fill="none"
            stroke="#96bfff"
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
            style={{ fontFamily: "system-ui", fill: "white" }}
          >
            {name}
          </text>
        </Marker>
      ))}

{/*       </ZoomableGroup>
 */}    </ComposableMap>
  )
}
