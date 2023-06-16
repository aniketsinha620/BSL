import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

L.Marker.prototype.options.icon = L.icon({
    iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});
let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90],
});
export default function Routing(props) {
    const map = useMap();

    useEffect(() => {
        var marker1 = L.marker([22.8046, 86.2029], { icon: DefaultIcon }).addTo(
            map
        );
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [L.latLng([]), L.latLng([])],
            routeWhileDragging: false,
            geocoder: L.Control.Geocoder.nominatim({
                geocodingQueryParams: {
                    "accept-language": "en",
                },
            }),

        }).on("routesfound", function (e) {
            e.routes[0].coordinates.forEach((c, i) => {
                setTimeout(() => {
                    marker1.setLatLng([c.lat, c.lng]);
                }, 1000 * i);
            });
            console.log(e)
        }

        )
            .addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, [22.8046, 86.2029], [22.8046, 86.2029]]);

    return null;
}




