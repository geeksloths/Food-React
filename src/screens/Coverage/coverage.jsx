import './coverage.scss';
import {MapContainer, TileLayer, FeatureGroup, useMap, Marker} from 'react-leaflet';
import {EditControl} from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
// import axios from 'axios';
import L from 'leaflet';
import {useEffect, useRef, useState} from "react";
import locationIcon from '../../assets/svgs/location.svg';

const Coverage = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState([35.7219, 51.3347]);
    const [points, setPoints] = useState([]);
    const mapRef = useRef();
    const svgIcon = L.divIcon({
        html: `<img src=${locationIcon} style="width: 40px; height: 40px;" />`,
        iconSize: [40, 40],
        className: ''  // Make sure no default styles are applied
    });

    useEffect(() => {
        getUserLocation();
    }, [])
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const map = mapRef.current;

                    if (map != null) {
                        setMapCenter([latitude, longitude]);
                        map.setView([latitude, longitude], 20); // Use [latitude, longitude]
                    }
                    setUserLocation([latitude, longitude]);
                },
                (error) => {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            console.log("User denied the request for Geolocation.");
                            break;
                        case error.POSITION_UNAVAILABLE:
                            console.log("Location information is unavailable.");
                            break;
                        case error.TIMEOUT:
                            console.log("The request to get user location timed out.");
                            break;
                        case error.UNKNOWN_ERROR:
                            console.log("An unknown error occurred.");
                            break;
                    }
                }
            );
        } else {
            console.log("Geolocation is not supported by your browser.");
        }
    };
    const handleCreated = (e) => {
        const {layerType, layer} = e;
        if (layerType === 'polygon') {
            const coordinates = layer.getLatLngs()[0].map(latlng => [latlng.lat, latlng.lng]);
            setPoints(coordinates);
        }
    };

    const handleEdited = (e) => {
        const layers = e.layers;
        layers.eachLayer(layer => {
            if (layer instanceof L.Polygon) {
                const coordinates = layer.getLatLngs()[0].map(latlng => [latlng.lat, latlng.lng]);
                setPoints(coordinates);
            }
        });
    };
    const SetMapRef = () => {
        const map = useMap();
        mapRef.current = map;
        return null;
    }
    return (
        <div className='coverage  animate__animated animate__fadeInLeft'>
            <div className='heading'>
                <h1 className='header'>محدوده خدمت رسانی</h1>
                <button className={'btn yellow-btn ' + (points.length === 0 ? "hidden" : "")}>ذخیره</button>
            </div>
            <div className='map-section'>
                <div className='get-location' onClick={getUserLocation}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="48"
                              d="M256 96V56M256 456v-40M256 112a144 144 0 10144 144 144 144 0 00-144-144zM416 256h40M56 256h40"/>
                    </svg>
                </div>
                <MapContainer center={mapCenter} zoom={13} whenReady={mapInstance => {
                    mapRef.current = mapInstance;
                }}>
                    <SetMapRef/>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <FeatureGroup>
                        <EditControl
                            position="topright"
                            onCreated={handleCreated}
                            onEdited={handleEdited}
                            draw={{
                                rectangle: false,
                                circle: false,
                                circlemarker: false,
                                marker: false,
                                polyline: false
                            }}
                        />
                    </FeatureGroup>
                    {userLocation && <Marker position={userLocation} icon={svgIcon}/>}
                </MapContainer>
            </div>
        </div>
    )
}

export default Coverage;