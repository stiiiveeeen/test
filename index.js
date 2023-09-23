// Destination coordinates (replace with your desired destination)
var destinationLatitude = 36.2512384;
var destinationLongitude = 6.5339392;
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, { enableHighAccuracy: true });
navigator.geolocation.getCurrentPosition(successCallback, errorCallback, { timeout: 10000, maximumAge: 60000 });

function initMap() {
    console.log('initMap function called');
    // ... rest of your code
}




function errorCallback(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.error('Permission denied');
            break;
        case error.POSITION_UNAVAILABLE:
            console.error('Position information is unavailable');
            break;
        case error.TIMEOUT:
            console.error('Request timed out');
            break;




            
        case error.UNKNOWN_ERROR:// Check if the browser supports geolocation
        if ("geolocation" in navigator) {
            // Check if high-accuracy mode is enabled
            navigator.permissions.query({ name: "geolocation" }).then(function (result) {
                if (result.state === "granted") {
                    // High-accuracy mode is already enabled, proceed with geolocation
                    getLocation();
                } else if (result.state === "prompt") {
                    // Prompt the user to enable high-accuracy mode
                    var enableHighAccuracyButton = document.createElement("button");
                    enableHighAccuracyButton.textContent = "Enable High Accuracy Mode";
                    enableHighAccuracyButton.addEventListener("click", function () {
                        navigator.geolocation.getCurrentPosition(
                            function (position) {
                                // High-accuracy mode is enabled, proceed with geolocation
                                getLocation();
                            },
                            function (error) {
                                // Handle geolocation error
                                console.error("Geolocation error:", error);
                            },
                            { enableHighAccuracy: true } // Enable high-accuracy mode
                        );
                    });
        
                    // Add the button to your HTML page
                    document.body.appendChild(enableHighAccuracyButton);
                } else if (result.state === "denied") {
                    // Geolocation is denied, inform the user
                    console.error("Geolocation is denied. Enable it in your device settings.");
                }
            });
        } else {
            console.error("Geolocation is not supported by your browser.");
        }
        
        function getLocation() {
            // Your geolocation code goes here
            // For example, you can call navigator.geolocation.getCurrentPosition() here
        }
        
            console.error('An unknown error occurred');
            break;
    }
}




if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);

        // Use the latitude and longitude in your application
    }, function (error) {
        console.error("Error getting location: " + error.message);
    }, { enableHighAccuracy: true });
} else {
    console.error("Geolocation is not supported by your browser.");
}


