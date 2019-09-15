var CourtineController = function (model, view, simulation) {
    this.model = model;
    this.view = view;
    this.simulation = simulation;

    this.init();
};

CourtineController.prototype = {

    init: function () {
        this.enable();
    },

    enable: function () {
        this.view.courtineChangeEvent.attach(this.changeCourtine.bind(this))
        this.model.changeCourtineEvent.attach(this.onCourtaineChnage.bind(this));
        return this;
    },

    changeCourtine: function(sender, courtineClosed) {
        this.model.changeCourtine(courtineClosed);
    },

    onCourtaineChnage: function(sender, courtineClosed){
        this.view.onCurtainChange(sender, courtineClosed);
        this.simulation.courtine(sender, courtineClosed);
    }
};