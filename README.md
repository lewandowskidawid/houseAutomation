## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [New Controller Development](#new-controller-development)


## About The Project
A JavaScript application simulating house setting management. It allows to control following setting: temerature, light, courtines.

When the application starts it downloas saved settings from server (currently the communication is mocked and settings are loaded from `/server/data/json` file) and propagate the data to a controller. The contrloer allows users to change default setting. When the user changes any parameter then request to the server is send (server endpoints are replaced with satic files stored in `server` directory e.g. `temerature` to simulate sucessful responses from the server) and house vizualization is updated. 

### Built With
Following technolgies are being used in the project:
* [JQuery](https://jquery.com)
* [Mustard UI](https://mustard-ui.com/)


## Getting Started
The application needs to be placed in any HTTP server. When it is done the application could be opened via `index.html` file.


## New Controller Development
In case of development a new controller follow the steps:
1. Extend `/js/utils/ServerApi.js` files about methods for requesting and sending the controller data.
2. Add default value of the controller to `/server/data.json` file
3. Add new file into `server` directory which will be requested when a user change the controller value
4. Extend `/js/app/SensorModel.js` file about new method and event for broadcasting the controller status change
5. Go to `index.html` file and
    1. Add to `control-panel` section a input which will be used to managing the controller state
    2. In `house-plan` section updates rooms markup to present visually setting from the previos point 
6. Create new directory in `/js/controllers` which will containt all logic related to the new controller
7. Inside the new directory create following files
    1. Model file which contains logic executed when controller setting changes
    2. Panel file which sends event when a user change controller setting and listen on model changes
    3. Simulation file which listes on model chanages and visualize the changes on a mock 
    4. Controller which esure proper data flow between model, panel and simulation objects
