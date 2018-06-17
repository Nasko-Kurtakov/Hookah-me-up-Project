import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap as GMap, Marker } from "react-google-maps"
import "./GoogleMap.css"

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDemkFK1saot8uKjt-Krpq7xE-fSg9yu_g&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GMap
        defaultZoom={12}
        defaultCenter={props.markerPos}>
        <Marker
            position={props.markerPos}>
        </Marker>
    </GMap>
);

const addresses = {
    "Студентски град бл. 42 вх. Б":{lat: 42.659595, lng: 23.337258},
    "Студентски град бл. 52 вх. Б": {lat: 42.646595, lng: 23.337258},
    "Ivan Vazov Blok 26": {lat: 42.676387, lng: 23.308116},
    "ж.к. Младост 3 Blok 7": {lat: 42.643537, lng: 23.385257},
    "жк. Гоце Делчев №420": {lat:42.664172, lng:23.298820},
    "Гео Милев 777": {lat:42.678912, lng:23.359692},
    "Овча Купел Блок 17": {lat:42.675696, lng:23.258608},
    "жк. Стрелбище блок 20 Д": {lat:42.674179, lng:23.297586},
    "Младост 1 ул. Върбичка №3": {lat:42.651185, lng: 23.379186}
};

export class GoogleMap extends React.PureComponent {

    constructor(props){
        super(props);
        this.order = this.props.order;
        this.state = {
            isMarkerShown: false
        }
    }

    componentDidMount() {
        this.delayedShowMarker();
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true });
        }, 3000)
    };

    toggleMarker = () => {
        const newState = !this.state.isMarkerShown;
        this.setState({ isMarkerShown: newState });
        // this.delayedShowMarker()
    };

    render() {
        const markerText = this.order["имена"];
        const markerPos=addresses[this.order["адрес"]];
        return (
            <MapComponent
                markerText={markerText}
                markerPos={markerPos}
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.toggleMarker}
            />
        )
    }
}