export let carName = "BMX";

export interface Car {
    brand: string,
    model: string,
    build: number
}

export function move() {
    console.log("Car is Moving now");
}

export class carClass {
    changeGear(upOrDown: string) {
        console.log(`change the Gear ${upOrDown}`);
    }

    brake() {
        console.log("Car is Stop ");
    }
}

export default  Car;