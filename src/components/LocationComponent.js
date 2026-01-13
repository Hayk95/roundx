import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
export default function LocationComponent() {
    const [userLocation, setUserLocation] = useState({latitude:'',longitude:''})

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setUserLocation({ latitude, longitude });
                },

                (error) => {
                    console.error("Error get user location: ", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser");
        }
    };

    const getAddressFromLatLng = async () => {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLocation.latitude}&lon=${userLocation.longitude}&zoom=18&addressdetails=1`);
            const { address } = response.data;
            return address;
        } catch (error) {
            console.error('Error fetching address:', error);
            return null;
        }
    };




    return (
        <div>
            <h1>Geolocation App</h1>
            {/* create a button that is mapped to the function which retrieves the users location */}
            <button onClick={getUserLocation}>Get User Location</button>
            {/* if the user location variable has a value, print the users location */}
            {userLocation && (
                <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                    <div onClick={() => getAddressFromLatLng()}>Get address</div>
                </div>
            )}
            {/*<MapContainer center = { [ 20.593683, 78.962883 ] }*/}
            {/*              zoom = { 5 }*/}
            {/*              scrollWheelZoom = { true }*/}
            {/*>*/}
            {/*    <TileLayer*/}
            {/*        attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'*/}
            {/*        url = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'*/}
            {/*    />*/}
            {/*</MapContainer>*/}

        </div>
    );
}
