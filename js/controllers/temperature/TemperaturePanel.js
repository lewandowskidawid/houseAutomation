var TemperatureView = function () {
    this.tempChangeEvent = new Event(this);
    this.init();
};

TemperatureView.prototype = {

    init: function () {
        this.createChildren()
            .enable();
    },

    createChildren: function () {
        this.$controlPanel = $('.control-panel');
        this.$tempController = this.$controlPanel.find('.temperature-controller');

        return this;
    },

    enable: function () {
        this.$tempController.change(this.tempChange.bind(this));

        return this;
    },

    tempChange: function () {
        this.tempChangeEvent.notify(
            this.$tempController.val()
        );
    },

    onTemperatureChange: function(sender, temperature) {
        this.$tempController.val(temperature);
    },

};




