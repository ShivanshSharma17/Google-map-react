import React from 'react';
import GoogleMapReact from 'google-map-react';

const LATITUDE_VAL = 28.4775;
const LONGITUDE_VAL = 77.0841;
const DEFAULT_ZOOM_VALUE = 11;
const MY_API_KEY = 'AIzaSyDGhGk3DTCkjF1EUxpMm5ypFoQ-ecrS2gY';

const myCoordinates = {
  lat: LATITUDE_VAL,
  lng: LONGITUDE_VAL,
};

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MY_API_KEY }}
        defaultCenter={myCoordinates}
        defaultZoom={DEFAULT_ZOOM_VALUE}
      >
          <img
            lat={LATITUDE_VAL}
            lng={LONGITUDE_VAL}
            src='https://developers.google.com/maps/documentation/javascript/examples/full/images/talkeetna.png'
            width="250px">
          </img>
      </GoogleMapReact>
    </div>
  );
};

export default App;