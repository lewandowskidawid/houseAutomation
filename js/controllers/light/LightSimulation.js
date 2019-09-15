var LightSimulation = function () {
    this.init();
};

LightSimulation.prototype = {

    init: function () {
        this.createChildren(); 
    },

    createChildren: function () {
        this.$housePlan = $('.house-plan');
        this.$light = this.$housePlan.find('.light');

        return this;
    },

    light: function (sender, linghtOn) {
        if (linghtOn == true){
            this.$housePlan.find('.light-bulb').addClass('light-bulb-on');
        } else {
            this.$housePlan.find('.light-bulb').removeClass('light-bulb-on');
        }
    }
};




