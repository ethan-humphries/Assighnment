class Vehicle {
    registration : string;
    make :  string;
    model : string;
    year : number;
    transmission :  string;
    bodyShape : string;

    constuctor(r:  string, m:  string, mdl: string, trans:  string, body: string , y?: number) {
        this.registration = r;
        this.make = m;
        this.model = mdl;
        this.year =  y;
        this.transmission=  trans;
        this.bodyShape = body;
    }

    getRegistration() : string {
        return this.registration;
    }

    setRegistration(r : string) {
        this.registration =  r;
    }

    getMake() : string {
        return this.make;
    }

    setMake(m : string) {
        this.make = m;
    }

    getModel() : string {
        return this.model;
    }

    setModel(mdl : string) {
        this.model = mdl;
    }

    getTransmission() : string {
        return this.transmission;
    }

    setTransmission(trans : string) {
        this.transmission = trans;
    }

    getBodyshape() : string {
        return this.bodyShape;
    }

    setBodyShape(body : string) {
        this.bodyShape = body;
    }

    getYear() : number {
        return this.year;
    }

    setYear(y : number) {
        this.year = y;
    }

}



