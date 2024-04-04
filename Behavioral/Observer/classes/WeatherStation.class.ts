import { Observer } from "../interfaces/Observer.interface";
import { Subject } from "../interfaces/Subject.interface";

export class WeatherStation implements Subject {
    private temperature: number = 0;
    private observers: Observer[] = [];

    setTemperature(temperature: number): void {
        console.log("Weather Station: new temperature measurement: " + temperature);
        this.temperature = temperature;
        this.notifyObservers();
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}