
var app = {
// Application Constructor
    initialize: function() {
        this.bindEvents();
    },
//Esperando que el dispositivo este listo para usar
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
//Dispositivo listo para usar ... ejecutar eventos ...
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
//Ejecucion de eventos
    receivedEvent: function(id) {

        var parentElement = $(id);
        app.getDeviceInfo(parentElement);
        app.getConnectionInfo(parentElement);

    },

//========================================

    getDeviceInfo: function(parentElement) {
        var modelElement         = $('#model');
        var versionElement       = $('#version');
        var platformElement      = $('#platform');
        var uuidElement          = $('#uuid');
        var deviceVersionElement = $('#device-vesion');

        modelElement.html(device.model);
        versionElement.html(device.cordova);
        platformElement.html(device.platform);
        uuidElement.html(device.uuid);
        deviceVersionElement.html(device.version);
    },
    getConnectionInfo: function(parentElement) {

        var connectionTypeElement = $('#conn-type');
        var estado = "No reconocido";
        if(navigator.connection != undefined){
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'Wifi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cellular connection';
            states[Connection.NONE]     = 'No network connection';
            estado = states[networkState];
        }
        connectionTypeElement.html(estado);
    }
};

