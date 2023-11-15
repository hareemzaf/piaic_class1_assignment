function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
//three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York"); // This will use the default country ("Unknown").
describe_city("Tokyo", "Japan");
