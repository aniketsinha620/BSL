// import { useEffect } from "react";
// import L from "leaflet";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import "leaflet-routing-machine";
// import { useMap } from "react-leaflet";

// L.Marker.prototype.options.icon = L.icon({
//     iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
// });

// export default function Routing(props) {
//     const map = useMap();

//     useEffect(() => {
//         if (!map) return;

//         const routingControl = L.Routing.control({
//             waypoints: [L.latLng(props.source), L.latLng(props.destination)],
//             routeWhileDragging: true
//         }).addTo(map);

//         return () => map.removeControl(routingControl);
//     }, [map]);

//     return null;
// }








import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing(props) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [L.latLng(props.source), L.latLng(props.destination)],
            lineOptions: {
                styles: [
                    {
                        color: "blue",
                        weight: 4,
                        opacity: 0.7,
                    },
                ],
            },
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: true,


        }).on("routesfound", function (e) {
            coordinates.forEach((c, i) => {
                setTimeout(() => {
                    marker1.setLatLng([c.lat, c.lng]);
                }, 1000 * i);
            });
        })
            .addTo(map);


    }, [map]);

    return null;
}