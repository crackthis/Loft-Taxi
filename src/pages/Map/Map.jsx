import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import {HeaderWithAuth} from "../../components/header/header";
import styled from "styled-components";

const MapContainer = styled.div`
    
`

export class Map extends Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiY3JhY2t0aGlzIiwiYSI6ImNraW5td2NvZzEyajUycmxicDh1cXY2dnQifQ.jckoQy0o5_d6yCZV2xWePQ";
        this.map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v9",
            center: [30.3056504, 59.9429126], // LED
            zoom: 10,
            attributionControl: false
        });
        this.map.resize();
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        return (
            <>
                <HeaderWithAuth />
                <MapContainer>
                    <div data-testid="map" className="map" ref={this.mapContainer} />
                </MapContainer>
                </>
        );
    }
}
