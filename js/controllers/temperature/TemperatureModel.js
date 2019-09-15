var TemperatureModel = function (serverApi) {
    this.serverApi = serverApi;
    this.changeTempEvent = new Event(this);
};

TemperatureModel.prototype = {
    
    changeTemp: function (temperature) {
        if (!temperature) {
            temperature = 24;
        }
        this.serverApi.updateTemperature(temperature);
        this.changeTempEvent.notify(
            this.serverApi.getTemperature()
        );
    }

};