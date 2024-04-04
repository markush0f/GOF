import { CarDisplay } from "./classes/CarDisplay.class";
import { PhoneDisplay } from "./classes/PhoneDisplay.class";
import { WeatherStation } from "./classes/WeatherStation.class";

const weatherStation = new WeatherStation();
const phoneDisplay = new PhoneDisplay();
const carDisplay = new CarDisplay();

weatherStation.registerObserver(phoneDisplay);
weatherStation.registerObserver(carDisplay);

weatherStation.setTemperature(25);
