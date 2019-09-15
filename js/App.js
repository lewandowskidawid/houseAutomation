$(function () {
    var serverApi =  new ServerApi(),
        courtineModel = new CourtineModel(serverApi),
        courtinePanel = new CourtinePanel(),
        courtineSimulation = new CourtineSimulation(),
        courtineController = new CourtineController(courtineModel, courtinePanel, courtineSimulation),
        temperatureModel = new TemperatureModel(serverApi),
        temperaturePanel = new TemperatureView(),
        temperatureSimulation = new TemperatureSimulation(),
        temperatureController = new TemperatureController(temperatureModel, temperaturePanel, temperatureSimulation),
        lightModel = new LightModel(serverApi),
        lightPanel = new LightPanel(),
        lightSimulation = new LightSimulation(),
        lightController = new LightController(lightModel, lightPanel, lightSimulation);
    serverApi.getData(courtineModel, temperatureModel, lightModel);
});