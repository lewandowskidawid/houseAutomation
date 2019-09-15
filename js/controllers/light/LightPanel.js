var LightPanel = function () {
    this.lightChangeEvent = new Event(this);
    this.init();
};

LightPanel.prototype = {

    init: function () {
        this.createChildren()
            .enable();
    },

    createChildren: function () {
        this.$controlPanel = $('.control-panel');
        this.$lightController = this.$controlPanel.find('.light-controller');
        return this;
    },

    enable: function () {
        this.$lightController.change(this.light.bind(this));

        return this;
    },

    light: function () {
        this.lightChangeEvent.notify(
            this.$lightController.prop('checked')
        );
    },

    onLightChange: function(sender, lightStatus) {
        this.$lightController.prop('checked', lightStatus);
    },

};




