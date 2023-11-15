function car_info(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
    let car: Record<string, any> = {
        manufacturer: manufacturer,
        model: model
    };

    for (let option of options) {
        for (let key in option) {
            car[key] = option[key];
        }
    }

    return car;
}


let carInfo = car_info("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });


console.log(carInfo);
