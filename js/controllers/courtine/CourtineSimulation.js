var CourtineSimulation = function () {
    this.init();
};

CourtineSimulation.prototype = {

    init: function () {
        this.createChildren();
    },

    createChildren: function () {
        this.$housePlan = $('.house-plan');
        this.$courtine = this.$housePlan.find('.courtine');

        return this;
    },

    courtine: function(sender, courtineClosed) {
        if (courtineClosed == true){
            this.$housePlan.find('.room').addClass('courtines-closed');
        } else {
            this.$housePlan.find('.room').removeClass('courtines-closed');            
        }
    }
};




