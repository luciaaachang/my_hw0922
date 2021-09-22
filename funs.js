function flyToDegrees(longitude, latitude, elevation, heading, pitch) {
    console.log("Testing");
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(121.4175), 23.655, 4000),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-15.0),
        }
    });
}