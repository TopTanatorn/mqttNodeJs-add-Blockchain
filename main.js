const mqtt = require("mqtt");

const MQTT_SERVER = "192.168.0.164";
const MQTT_PORT = "1883";
//if your server don't have username and password let blank.
const MQTT_USER = ""; 
const MQTT_PASSWORD = "";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe("#", function (err) {
        if (err) {
            console.log(err);
        }
    });
});

// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
});

setInterval(() => {
    client.publish("test", "hello from NodeJS");
}, 5000);