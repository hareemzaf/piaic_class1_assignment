function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items on the sandwich.");
    }
    else {
        console.log("Items on the sandwich:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
    }
    console.log("Enjoy your sandwich!\n");
}
make_sandwich("Turkey", "Cheese", "Lettuce");
make_sandwich("Ham", "Mustard");
make_sandwich("Veggie");
