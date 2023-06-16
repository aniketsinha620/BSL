


// // import Leaflet from "leaflet";
// // import { useLeafletContext, leafletElement, createLayerComponent } from '@react-leaflet/core'
// import { MapContainer, Marker, Popup, TileLayer ,useMap} from "react-leaflet";
// import React from "react";
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';
// import "./basicmap.css"
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import Routing from "./Routing";





// const markerIcon = new L.Icon({
//     iconUrl: "https://www.pngall.com/wp-content/uploads/13/Taxi-Yellow-PNG-Images.png",
//     // iconSize: [95, 55],
//     iconAnchor: [17, 48],
//     popupAnchor: [3, -46]
// });
// const defaultIcon = new L.Icon({
//     iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//     // iconSize: [95, 55],
//     iconAnchor: [17, 48],
//     popupAnchor: [3, -46]
// });







// function App() {
//     const [slat, setSlat] = React.useState("22.7866")
//     const [slog, setSlog] = React.useState("86.1660")
//     const [dlat, setDlat] = React.useState("23.3441")
//     const [dlog, setDlog] = React.useState("85.3096")
//     const [position,setPosition] = React.useState([slat, slog]);
//     const [dposition,setDposition] = React.useState([dlat, dlog]);
//     const [verify,setVerify] = React.useState(false);

//     const handleClick=(e)=>{
//         e.preventDefault()
//        setPosition([slat, slog])
//        setDposition([dlat, dlog])
//         console.log(dposition)
//         setVerify(true)
//          console.log(position)

//  }

//  return (
//         <div className="basicmap">
//         <div className="detail">
//             <form action="">
//                 <input type="number" placeholder="Source latitude" name="slat" onChange={(e) => setSlat(e.target.value)} />
//                 <input type="number" placeholder="Source longitutde" name="slog" onChange={(e) => setSlog(e.target.value)} />
//                 <input type="number" placeholder="destination latitude" name="dlat" onChange={(e) => setDlat(e.target.value)} />
//                 <input type="number" placeholder="destination longitutde" name="dlog" onChange={(e) => setDlog(e.target.value)} />
//                 <button onClick={(e)=>handleClick(e)}>submit</button>
//             </form>
//         </div>

//         <div className="App">
//             <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />

//                 {verify && <Routing    source={position}  destination={dposition}/>}

//               <Marker
//                     position={position}
//                     icon={defaultIcon}
//                 >

//                 </Marker>


//             </MapContainer>
//         </div></div>
//     );
// }


// export default App;








// // import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// // import L from "leaflet";
// // import 'leaflet/dist/leaflet.css';
// // import "./basicmap.css"





// // const markerIcon = new L.Icon({
// //     iconUrl: "https://www.pngall.com/wp-content/uploads/13/Taxi-Yellow-PNG-Images.png",
// //     iconSize: [95, 55],
// //     iconAnchor: [17, 48],
// //     popupAnchor: [3, -46]
// // });







// // function App() {
// //     const position = [22.8046, 86.2029];
// //     return (
// //         <div className="App">
// //             <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
// //                 <TileLayer
// //                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //                 />
// //                 {/*  <LeafletGeocoder /> */}
// //                 {/* <LeafletRoutingMachine /> */}

// //                 <Marker
// //                     position={[22.7866, 86.1660]}
// //                     icon={markerIcon}
// //                 ></Marker>

// //                 <Marker
// //                     position={[23.7957, 86.4304]}
// //                     icon={markerIcon}
// //                 ></Marker>
// //             </MapContainer>
// //         </div>
// //     );
// // }


// // export default App;


















// // import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// // import React from "react";
// // import L from "leaflet";
// // import 'leaflet/dist/leaflet.css';
// // import "./basicmap.css"

// const markerIcon = new L.Icon({
//     iconUrl: "https://www.pngall.com/wp-content/uploads/13/Taxi-Yellow-PNG-Images.png",
//     iconSize: [95, 55],
//     iconAnchor: [17, 48],
//     popupAnchor: [3, -46]
// });


// // function App() {
// //     const position = [22.8046, 86.2029];
//     // const [slat, setSlat] = React.useState("22.7866")
//     // const [slog, setSlog] = React.useState("86.1660")
//     // const [dlat, setDlat] = React.useState("23.7957")
//     // const [dlog, setDlog] = React.useState("86.1660")
// // return (

//         // <div className="basicmap">
//         //     <div className="detail">
//         //         <form action="">
//         //             <input type="number" placeholder="Source latitude" name="slat" onChange={(e) => setSlat(e)} />
//         //             <input type="number" placeholder="Source longitutde" name="slog" onChange={(e) => setSlog(e)} />
//         //             <input type="number" placeholder="destination latitude" name="dlat" onChange={(e) => setDlat(e)} />
//         //             <input type="number" placeholder="destination longitutde" name="dlog" onChange={(e) => setDlog(e)} />
//         //             <button>submit</button>
//         //         </form>
//         //     </div>
// //             <div className="App">
// //                 <MapContainer center={{position}} zoom={9} scrollWheelZoom={false}>
// //                     <TileLayer
// //                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //                     />


// //                     <Marker
// //                         position={[22.7866, 86.1660]}
// //                         icon={markerIcon}
// //                     ></Marker>

// //                     <Marker
// //                         position={[23.7957, 86.4304]}
// //                         icon={markerIcon}
// //                     ></Marker>
// //                 </MapContainer>
// //             </div>
// //             </div>
// //     );
// // }


// // export default App;






import { MapContainer, Marker, Popup, TileLayer, useMap, Circle } from "react-leaflet";
import React, { useEffect,useState, useRef } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import "./basicmap.css"
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Routing from "./Routing";
const position = [22.8046, 86.2029];

const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    // iconSize: [95, 55],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});

const markerIcon = new L.Icon({
    iconUrl: "https://www.pngall.com/wp-content/uploads/13/Taxi-Yellow-PNG-Images.png",
    iconSize: [95, 55],
    iconAnchor: [17, 48],
    popupAnchor: [3, -46]
});

function BasicMap() {
    const sourceInputRef = useRef(null);
    const destinationInputRef = useRef(null);
    const [verify,setVerify]=useState(false)

    const handleClick=(e)=>{
    e.preventDefault()
    setVerify(prevState => !prevState);
    }
    return (
        <div >
            <div className="map-container">
                <div className="search-box">
                    <input
                        ref={sourceInputRef}
                        type="text"
                        placeholder="Enter source location"
                    />
                    <input
                        ref={destinationInputRef}
                        type="text"
                        placeholder="Enter destination location"
                    />
                    <button onClick={(e)=>handleClick(e)}>submit</button>
                </div>
            </div>
            <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker
                    position={position}
                    icon={defaultIcon} /> */}
                <Circle center={position} radius={250000} />
                {/* <Marker
                    position={position}
                    icon={markerIcon} />
                <Marker
                    position={[23.3441, 85.3096]}
                    icon={markerIcon} />
                <Marker
                    position={[22.7866, 86.1660]}
                    icon={markerIcon} /> */}
               { verify&&<Routing source={sourceInputRef} destination={destinationInputRef} />}

            </MapContainer>
        </div>

    );
}


export default BasicMap;