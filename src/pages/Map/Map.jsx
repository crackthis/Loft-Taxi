import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';
import {HeaderWithAuth} from "../../components/header/header";
import styled from "styled-components";
import { Paper } from '@material-ui/core';
import { paper, choose, readyPaper, readyPaperText } from './Map.module.css';
import {MapInputConnect} from "../../components/mapInput/mapInput";
import {Button} from "../../components/button/button";
import {connect} from "react-redux";
import {loadReadyRoute} from "../../actions";


const MapContainer = styled.div``

export const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: "routedraw",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            },
        },
        layout: {
            "line-join": "round",
            "line-cap": "round",
            "symbol-z-order": "source",
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8,
            "z-index": 5,
        }
    });
};

export class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active1: false,
            active2: false,
            target: "",
            readyRoute: this.props.readyRoute,
            routeIsDone: false,
        }
    }

    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        const main = document.querySelector('.all-sections');
        main.addEventListener("click", this.takeTarget, {capture: true});
        main.addEventListener("click", this.toggleList, {capture: true});
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.readyRoute !== prevProps.readyRoute) {
            this.setState({readyRoute: this.props.readyRoute})
        }
    }

    componentWillUnmount() {
        const main = document.querySelector('.all-sections');
        main.removeEventListener("click", this.takeTarget, {capture: true});
        main.removeEventListener("click", this.toggleList, {capture: true});
        this.map.remove();
    }

    loadReadyRoute = async () => {
        const routeOne = this.props.routeOne;
        const routeTwo = this.props.routeTwo;
        await this.props.loadReadyRoute(routeOne, routeTwo);
        this.setState({routeIsDone: true});
        drawRoute(this.map, this.state.readyRoute);
    }

    takeTarget = (e) => {
        this.setState({target: e.target});
    }

    toggleList = () => {
        const target = this.state.target;

        if (target.className === 'list-item') {
            return null;
        }
        if (target.id === 'active1' && this.state.active1 === false) {
            this.setState({active1: true});
        } else if(!target.id || target.id === 'active2') {
            this.setState({active1: false});
        }

        if (target.id === 'active2' && this.state.active2 === false) {
            this.setState({active2: true});
        } else if(!target.id || target.id === 'active1') {
            this.setState({active2: false});
        }
    }

    newOrder = () => {
        this.setState({
            routeIsDone: false
        });
    }


    render() {
        return (
            <>
                <HeaderWithAuth />
                <MapContainer>
                    <div data-testid="map" className="map" ref={this.mapContainer} />
                </MapContainer>
                {
                    (this.state.routeIsDone) ? (
                        <Paper elevation={1} className={readyPaper}>
                            <h2>Заказ размещён</h2>
                            <div className={readyPaperText}>
                                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                            </div>
                            <Button name="Сделать новый заказ" onClick={this.newOrder}/>
                        </Paper>
                    ) : (
                        <Paper elevation={1} className={paper} >
                            <div className="search" >
                                <MapInputConnect
                                    placeholder="Откуда"
                                    active1={this.state.active1}
                                    id="active1"
                                    target={this.state.target}
                                />
                                <MapInputConnect
                                    placeholder="Куда"
                                    active2={this.state.active2}
                                    id="active2"
                                    target={this.state.target}
                                />
                            </div>
                            <div className={choose}>
                                <Button name="Заказать" onClick={this.loadReadyRoute}/>
                            </div>
                        </Paper>
                    )
                }
            </>
        );
    }
}

export const MapConnect = connect((state) => ({
    routeOne: state.address.routeOne,
    routeTwo: state.address.routeTwo,
    readyRoute: state.address.readyRoute,
}), {loadReadyRoute})(Map);