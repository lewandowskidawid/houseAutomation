var TemperatureController = function (model, view, simulation) {
    this.model = model;
    this.view = view;
    this.simulation = simulation;

    this.init();
};

TemperatureController.prototype = {

    init: function () {
        this.enable();
    },

    enable: function () {
        this.view.tempChangeEvent.attach(this.changeTemp.bind(this));
        this.model.changeTempEvent.attach(this.onTemperatureChange.bind(this));
        return this;
    },

    changeTemp: function (sender, temperature) {
        this.model.changeTemp(temperature);
    },

    onTemperatureChange: function(sender, temperature){
        this.view.onTemperatureChange(sender, temperature);
        this.simulation.tempChange(sender, temperature);
    }

};