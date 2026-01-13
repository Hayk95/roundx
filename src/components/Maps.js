import React, {useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiaGF5azk1OTUiLCJhIjoiY2thODM0d2hxMDk5djJ6cGN1dWFkMjNkbSJ9.-tYQ8IHHycal5KCtiuqraQ';

function Maps() {
    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const [lng, setLng] = useState(-70.9);
    // const [lat, setLat] = useState(42.35);
    // const [zoom, setZoom] = useState(9);
    //
    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v12',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });
    // });

    // map.current.on('move', () => {
    //     setLng(map.current.getCenter().lng.toFixed(4));
    //     setLat(map.current.getCenter().lat.toFixed(4));
    //     setZoom(map.current.getZoom().toFixed(2));
    // });

    return null
}

export default Maps;
