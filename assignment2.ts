//create a class of vehicles to be instantiated as vehicle objects
class Vehicle {
    registration : string;
    make :  string;
    model : string;
    year : number;
    transmission :  string;
    bodyShape : string;

    //constructor for vehicle, year? optional
    constructor(registration:  string, make:  string, model: string, transmission:  string, bodyShape: string , year?: number) {
        this.registration = registration;
        this.make = make;
        this.model = model;
        this.year =  year;
        this.transmission=  transmission;
        this.bodyShape = bodyShape;
    }

    //mutator methods
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

// create vehicles array and populate the array
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

//Initialize the vehicles array on TS document load
initializeVehicles();

//create a new vehicle if plate number does not already exist
function newVehicle() : void {
    let registration = (<HTMLInputElement>document.getElementById("registration")).value;
    let make = (<HTMLInputElement>document.getElementById("make")).value;
    let model = (<HTMLInputElement>document.getElementById("model")).value;
    let transmission = (<HTMLSelectElement>document.getElementById("transmission")).value;
    let bodyShape = (<HTMLSelectElement>document.getElementById("bodyShape")).value;
    let year =  Number((<HTMLInputElement>document.getElementById("year")).value);

    for (let vehicle of vehicles) {
        if (vehicle.getRegistration().toUpperCase() === registration.toUpperCase()){
            let message : string = "Registration Number must be unique";
            let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
            updateMessage.innerHTML = message;
        } else if (make == "" || model == "" ||  transmission == "" || bodyShape == "") {
            let message : string = "All fields must be entered except year";
            let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
            updateMessage.innerHTML = message;
        } else {
            vehicles.push((new Vehicle(registration.toUpperCase(), make, model, transmission, bodyShape, year)));
            let message : string = "New Vehicle Added:<br> " + registration + ", " + make + " " + model +", " + transmission +", "+ bodyShape;
            let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
            updateMessage.innerHTML = message;
        }
    }  
}

// if the vehicle is found, edit the details of the vehicle
function editVehicle() :  void {
    let message : string = "";
    let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
    updateMessage.innerHTML = message;

    let registration = (<HTMLInputElement>document.getElementById("registration")).value;
    let make = (<HTMLInputElement>document.getElementById("make")).value;
    let model = (<HTMLInputElement>document.getElementById("model")).value;
    let transmission = (<HTMLSelectElement>document.getElementById("transmission")).value;
    let bodyShape = (<HTMLSelectElement>document.getElementById("bodyShape")).value;
    let year =  Number((<HTMLInputElement>document.getElementById("year")).value);
    
    if ((this.make == "") || (this.model == "") ||  (this.transmission == "") || (this.bodyShape == "")) {
        let message : string = "All fields must be entered except year";
        let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
        updateMessage.innerHTML = message;
        return;
        }

    for (let vehicle of vehicles) {
        if(vehicle.getRegistration() === registration.toUpperCase()){
            vehicle.setMake(make);
            vehicle.setModel(model);
            vehicle.setTransmission(transmission);
            vehicle.setBodyShape(bodyShape);
            vehicle.setYear(year);
            let message : string = "Vehicle Updated:<br> " + registration.toUpperCase() + ", " + make + " " + model +", " + transmission +", "+ bodyShape;
            let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
            updateMessage.innerHTML = message;
        } else {
            let message : string = "Vehicle Registration Not found";
            let updateMessage: HTMLElement = <HTMLInputElement>document.getElementById("message");
            updateMessage.innerHTML = message;
        }
    }
}

//delete vehicle based on plate number entered
function deleteVehicle() :  void {
    let updateMessage: HTMLElement = <HTMLOutputElement>document.getElementById("message");
    updateMessage.innerHTML = "";
    let registration: string = (<HTMLInputElement>document.getElementById("registration")).value;  
    if(window.confirm("Are you sure you want to delete vehicle: " + registration + "?") == true) {
        for(let i : number = 0; i < vehicles.length - 1; i++) {
            if (vehicles[i].getRegistration().toUpperCase() === registration.toUpperCase()){
                vehicles.splice(i, 1);
                let updateMessage: HTMLElement = <HTMLOutputElement>document.getElementById("message");
                updateMessage.innerHTML = "Vehicle Deleted: " + registration.toUpperCase();
            } 
        }
        for (let vehicle of vehicles){
            console.log(vehicle);
        }
    }
}

// find vehicle and display vehicle details to user
function findVehicle() : void {
    let message : string = "";
    let updateMessage: HTMLElement = <HTMLOutputElement>document.getElementById("searchResult");
    updateMessage.innerHTML = message;

    let registration = (<HTMLInputElement>document.getElementById("findPlate")).value;
    console.log(registration);
    if (registration == "") {
        let updateMessage: HTMLElement = <HTMLOutputElement>document.getElementById("searchResult");
        updateMessage.innerHTML = "Valid registration number must be entered";
    } 
    for(let vehicle of vehicles){
        if(vehicle.getRegistration() === registration.toUpperCase()) {
            let message : string = "Vehicle Details:<br> " + registration.toUpperCase() + ", " + vehicle.make + " " + vehicle.model +", " + vehicle.transmission +", "+ vehicle.bodyShape;
            let updateMessage: HTMLElement = <HTMLOutputElement>document.getElementById("searchResult");
            updateMessage.innerHTML = message;
        } 
    }
}