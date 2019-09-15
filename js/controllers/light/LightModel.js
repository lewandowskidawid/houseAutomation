var LightModel = function (serverApi) {
    this.serverApi = serverApi;
    this.changeLightEvent = new Event(this);
};

LightModel.prototype = {
    
    changeLight: function(lightOn) {
        this.serverApi.updateLightStatus(lightOn);
        this.changeLightEvent.notify(
            this.serverApi.isLightOn()
        );
    }
};