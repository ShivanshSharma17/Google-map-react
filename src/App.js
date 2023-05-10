import React, { useEffect } from 'react';

import './App.css';
let map;

function App() {
  useEffect(() => {
    function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 28.613939, lng: 77.209023 },
        mapTypeId: "satellite",
      });
      const bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(28.613939, 77.209023),       
        new google.maps.LatLng(28.733939, 77.489023)                 
      );
      const srcImage =
        "https://developers.google.com/maps/documentation/" +
        "javascript/examples/full/images/talkeetna.png";
    
      
      class USGSOverlay extends google.maps.OverlayView {
        bounds_;
        image_;
        div_;
        constructor(bounds, image) {
          super();
          this.bounds_ = bounds;
          this.image_ = image;
          this.div_ = null;
        }
        
        onAdd() {
          this.div_ = document.createElement("div");
          this.div_.style.borderStyle = "none";
          this.div_.style.borderWidth = "0px";
          this.div_.style.position = "absolute";
    
          const img = document.createElement("img");
    
          img.src = this.image_;
          img.style.width = "100%";
          img.style.height = "100%";
          img.style.position = "absolute";
          this.div_.appendChild(img);
    
          const panes = this.getPanes();
    
          panes.overlayLayer.appendChild(this.div_);
        }
        draw() {
          
          const overlayProjection = this.getProjection();
         
          const sw = overlayProjection.fromLatLngToDivPixel(
            this.bounds_.getSouthWest()
          );
          const ne = overlayProjection.fromLatLngToDivPixel(
            this.bounds_.getNorthEast()
          );
    
          if (this.div_) {
            this.div_.style.left = sw.x + "px";
            this.div_.style.top = ne.y + "px";
            this.div_.style.width = ne.x - sw.x + "px";
            this.div_.style.height = sw.y - ne.y + "px";
          }
        }
        
        onRemove() {
          if (this.div_) {
            this.div_.parentNode.removeChild(this.div_);
            this.div_ = null;
          }
        }
      }
    
      const overlay = new USGSOverlay(bounds, srcImage);
    
      overlay.setMap(map);
    }
    window.initMap = initMap;
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAUkuBKPa35ZTmfqcurgoh8Ulbw7Sixxkg&callback=initMap&v=weekly"
    document.head.appendChild(script)
  }, [])
  return (<div > {
      map
    } <div style = {{
        width: 500,
        height: 500
      }
    }
    id = "map" />
    </div>
  )
}

export default App;
