// Observer interface
interface Observer {
    update(temperature: number): void;
}

// Subject interface
interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Concrete Subject
class WeatherStation implements Subject {
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

// Concrete Observer 1
class PhoneDisplay implements Observer {
    update(temperature: number): void {
        console.log("Phone Display: temperature updated to " + temperature);
    }
}

// Concrete Observer 2
class CarDisplay implements Observer {
    update(temperature: number): void {
        console.log("Car Display: temperature updated to " + temperature);
    }
}


const weatherStation = new WeatherStation();
const phoneDisplay = new PhoneDisplay();
const carDisplay = new CarDisplay();

weatherStation.registerObserver(phoneDisplay);
weatherStation.registerObserver(carDisplay);

weatherStation.setTemperature(25); // Both phone and car displays are updated
