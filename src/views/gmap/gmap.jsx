import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class gmap extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
              defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
              defaultZoom = { 13 }
            >
            </GoogleMap>
         ));
    
    return(
        <div className="animated fadeIn">
          <GoogleMapExample
            containerElement={ <div style={{ height: '500px', width: 'auto' }} /> }
            mapElement={ <div style={{ height: '100%' }} /> }
          />
        </div>
     );
     
    }
}

export default gmap;

