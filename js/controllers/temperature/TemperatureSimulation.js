var TemperatureSimulation = function () {
    this.init();
};

TemperatureSimulation.prototype = {

    init: function () {
        this.createChildren();
    },

    createChildren: function () {
        this.$housePlan = $('.house-plan');
        this.$temperature = this.$housePlan.find('.temperature');
        return this;
    },

    tempChange: function (sender, currentTemp) {
        this.$temperature.find('span').text(currentTemp);
    }
};




