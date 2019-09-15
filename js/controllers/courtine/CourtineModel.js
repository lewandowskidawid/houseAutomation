var CourtineModel = function (serverApi) {
    this.serverApi = serverApi;
    this.changeCourtineEvent = new Event(this);
};

CourtineModel.prototype = {
    
    changeCourtine: function(courtineClosed) {
        this.serverApi.updateCourtineStatus(courtineClosed);
        this.changeCourtineEvent.notify(
            this.serverApi.isCourtineClosed()
        );
    }
};