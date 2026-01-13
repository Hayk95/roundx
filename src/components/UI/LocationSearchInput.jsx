import React, {useEffect, useState} from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

const LocationSearchInput = ({title,onChange,errors}) => {
    const [address, setAddress] = useState("");

    const handleChange = (address) => {
        console.log("....", address);
        setAddress(address);

    };
    function getDrivingDistanceORS(lat1, lon1, lat2, lon2) {
        const apiKey = '5b3ce3597851110001cf62484290566341114236aa4f1d8a097801dc'; // Replace with your API key
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${lon1},${lat1}&end=${lon2},${lat2}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Extract distance and duration from the response
                // const distance = data.routes[0].summary.distance / 1000; // Convert meters to kilometers
                // const duration = data.routes[0].summary.duration / 60; // Convert seconds to minutes
                const distance = data.features[0].properties.segments[0].distance / 1000; // Convert meters to kilometers
                const distanceMile = data.features[0].properties.segments[0].distance / 1609.34; // Convert meters to kilometers
                const duration = data.features[0].properties.segments[0].duration / 60;
                console.log('------------------------------------------')
                console.log('from: los angeles');
                console.log('to: denwer');
                console.log(`Driving distance: ${distance.toFixed(2)} km`);
                console.log(`Driving distance: ${distanceMile.toFixed(2)} mile`);
                console.log(`Duration: ${duration.toFixed(2)} minutes`);
                if(0 < distanceMile && distanceMile <= 500) {
                    let price= distanceMile*1.3
                    console.log(`Price shipping ${price.toFixed(2)} $ ->per mile 1.3$`);
                }else if(500 < distanceMile && distanceMile <= 1500) {
                    let price= distanceMile*0.9
                    console.log(`Price shipping ${price.toFixed(2)} $ ->per mile 0.9$`);
                }else if(1500 < distanceMile) {
                    let price= distanceMile*0.6
                    console.log(`Price shipping ${price.toFixed(2)} $ ->per mile 0.6$`);
                }
                console.log('-----------------------------------------------------')
            })
            .catch(error => console.error('Error:', error));
    }



    useEffect(()=>{

        // 34.0549076 -118.242643
        // 39.7392358 -104.990251
        // const lat1 = 39.866593; // 80022
        // const lon1 = -104.7754307;
        //
        // const lat2 = 39.6563415; // 80013
        // const lon2 = -104.7637619;
        const lat1 = 34.0549076; // losic
        const lon1 = -118.242643;

        const lat2 = 39.7392358; // denver
        const lon2 = -104.990251;

        getDrivingDistanceORS(lat1, lon1, lat2, lon2);
    },[])

    const handleSelect = (address) => {

        setAddress(address);
        onChange(address)
        try {

            geocodeByAddress(address)
                .then((results) => {
                    const location = results[0].geometry?.location;
                    console.log("Location Lat/Lng:", location?.lat(), location?.lng());
                    results[0].address_components.forEach((add_comp) => {
                        if (add_comp.types.includes("sublocality_level_2", "sublocality")) {
                            console.log("long_name", add_comp.long_name);
                        }
                        if (add_comp.types.includes("sublocality_level_1", "sublocality")) {
                            console.log("long_name", add_comp.long_name);
                        }
                        if (
                            add_comp.types.includes("locality", "political") ||
                            add_comp.types.includes(
                                "administrative_area_level_2",
                                "political"
                            )
                        ) {
                            console.log("long_name", add_comp.long_name);
                        }
                        if (
                            add_comp.types.includes(
                                "administrative_area_level_1",
                                "political"
                            )
                        ) {
                            console.log("long_name", add_comp.long_name);
                        }
                        if (add_comp.types.includes("postal_code")) {
                            console.log("long_name", add_comp.long_name);
                        }
                    });
                })
                .then((latLng) => console.log("Success", latLng))
                .catch((error) => console.error("Error", error));
        } catch (error) {
            console.error("Error...", error);
        }
    };

    const searchOptions = {
        types: ['(regions)'],
        componentRestrictions: { country: 'us' }
    };

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            searchOptions={searchOptions}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div 
                    className="location-search"
                    style={{ zIndex: suggestions.length > 0 ? 10000 : 1 }}
                >
                    <label htmlFor="location-search-input">{title}</label>
                    <input
                        {...getInputProps({
                            placeholder: "ZIP OR CITY",
                            className: "location-search-input"
                        })}
                    />
                    {suggestions.length > 0 && (
                    <div 
                        className="autocomplete-dropdown-container"
                        style={{ zIndex: 10000 }}
                    >
                        {loading && <div>Loading...</div>}
                        {suggestions.map((suggestion) => {
                            const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                            // inline style for demonstration purpose
                            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                            const style = suggestion.active
                                ? { backgroundColor: "#6366f1", cursor: "pointer", color: "white" }
                                : { 
                                    backgroundColor: isDark ? "#1e293b" : "#efefef", 
                                    cursor: "pointer",
                                    color: isDark ? "#f1f5f9" : "#0f172a"
                                  };
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className,
                                        style
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                    )}
                    {errors && <span className="error">{errors}</span>}
                </div>
            )}

        </PlacesAutocomplete>
    );
};

export default LocationSearchInput;
