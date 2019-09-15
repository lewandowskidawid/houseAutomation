var ServerApi = function () {
    this.data = {};
}

ServerApi.prototype = {

    getData(courtineModel, temperatureModel, lightModel){
        $.ajax({
            type: 'GET',
            url: '/server/data.json',
            dataType: 'json',
            success: function (response) {
                temperatureModel.changeTemp(response.temperature);
                lightModel.changeLight(response.light);
                courtineModel.changeCourtine(response.courtine);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                temperatureModel.changeTemp(24);
                lightModel.chnageLight(false);
                courtineModel.changeCourtine(false);
            }
        });
    },

    getTemperature: function() {
        return this.data.temperature;
    },

    isLightOn: function() {
        return this.data.light;
    },

    isCourtineClosed: function() {
        return this.data.courtine;
    },

    updateTemperature: function(temperature){
        this.data.temperature = temperature;
        var result = $.ajax({
            url: '/server/temperature',
            data: {
                temperature: temperature
            },
            type: 'POST'
        });
    },

    updateLightStatus: function(lightOn){
        this.data.light = lightOn;
        var result = $.ajax({
            url: '/server/light',
            data: {
                light: lightOn
            },
            type: 'POST'
        });
    },

    updateCourtineStatus: function(courtineClosed) {
        this.data.courtine = courtineClosed;
        var result = $.ajax({
            url: '/server/courtine',
            data: {
                courtine: courtineClosed
            },
            type: 'POST'
        });
    }

};