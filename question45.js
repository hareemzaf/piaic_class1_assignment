function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car[key] = option[key];
        }
    }
    return car;
}
var carInfo = car_info("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });
console.log(carInfo);
