
function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}.`);
}

//three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York"); // This will use the default country ("Unknown").
describe_city("Tokyo", "Japan");
