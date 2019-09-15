var CourtinePanel = function () {
    this.courtineChangeEvent = new Event(this);
    this.init();
};

CourtinePanel.prototype = {

    init: function () {
        this.createChildren()
            .enable();
    },

    createChildren: function () {
        this.$controlPanel = $('.control-panel');
        this.$courtineController = this.$controlPanel.find('.curtaine-controller');

        return this;
    },

    enable: function () {
        this.$courtineController.change(this.courtine.bind(this));
        

        return this;
    },

    courtine: function() {
        this.courtineChangeEvent.notify(
            this.$courtineController.prop('checked')
        );
    },

    onCurtainChange: function(sender, curtaineStatus) {
        this.$courtineController.prop('checked', curtaineStatus);
    }
};




