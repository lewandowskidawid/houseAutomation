var LightController = function (model, view, simulation) {
    this.model = model;
    this.view = view;
    this.simulation = simulation

    this.init();
};

LightController.prototype = {

    init: function () {
        this.enable();
    },

    enable: function () {
        this.view.lightChangeEvent.attach(this.changeLight.bind(this));
        this.model.changeLightEvent.attach(this.onLightChange.bind(this));
        return this;
    },

    changeLight: function(sender, lightOn) {
        this.model.changeLight(lightOn);
    },

    onLightChange: function(sender, lightOn) {
        this.view.onLightChange(sender, lightOn);
        this.simulation.light(sender, lightOn);
    }
};