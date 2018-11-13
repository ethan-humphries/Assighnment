class Vehicle {
    registration : string;
    make :  string;
    model : string;
    year : number;
    transmission :  string;
    bodyShape : string;

    constructor(registration:  string, make:  string, model: string, transmission:  string, bodyShape: string , year?: number) {
        this.registration = registration;
        this.make = make;
        this.model = model;
        this.year =  year;
        this.transmission=  transmission;
        this.bodyShape = bodyShape;
    }

    getRegistration() : string {
        return this.registration;
    }

    setRegistration(registration : string) {
        this.registration =  registration;
    }

    getMake() : string {
        return this.make;
    }

    setMake(make : string) {
        this.make = make;
    }

    getModel() : string {
        return this.model;
    }

    setModel(model : string) {
        this.model = model;
    }

    getTransmission() : string {
        return this.transmission;
    }

    setTransmission(transmission : string) {
        this.transmission = transmission;
    }

    getBodyshape() : string {
        return this.bodyShape;
    }

    setBodyShape(bodyShape : string) {
        this.bodyShape = bodyShape;
    }

    getYear() : number {
        return this.year;
    }

    setYear(year : number) {
        this.year = year;
    }

}

let vehicles: Array<Vehicle>
function initializeVehicles() : void {
vehicles = [
    new Vehicle("ABC123", "Honda", "Accord", "Manual", "Sedan", 2001),
    new Vehicle("BBA124", "Toyota", "Yaris", "Automatic", "Sedan", 2005),
    new Vehicle("DDD100", "Ford", "Falcon", "Manual", "Ute", 2004),
    new Vehicle("ABC111", "Honda", "Accord", "Automaticl", "Sedan", 2010),
    new Vehicle("CIC333", "Toyota", "Accord", "Manual", "Sedan", 2018),
    new Vehicle("ABC145", "Ford", "F250", "Manual", "Ute", 2000),
    new Vehicle("KBC156", "Ford", "Focus", "Automatic", "Sedan", 1995),
    new Vehicle("ABC178", "Toyota", "Yaris", "Manual", "Sedan", 1996),
    new Vehicle("HBC121", "Honda", "Accord", "Manual", "Sedan", 2001),
    new Vehicle("ADC173", "Honda", "Accord", "automatic", "Sedan", 2012)  
]  
}

initializeVehicles();

for (let vehicle of vehicles){
    console.log(vehicle.getRegistration());
}