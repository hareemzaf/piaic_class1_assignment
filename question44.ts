function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items on the sandwich.");
    } else {
        console.log("Items on the sandwich:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("Enjoy your sandwich!\n");
}


make_sandwich("Turkey", "Cheese", "Lettuce");
make_sandwich("Ham", "Mustard");
make_sandwich("Veggie");
