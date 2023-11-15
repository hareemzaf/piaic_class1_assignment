//
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}


let result1 = city_country("Lahore", "Pakistan");
let result2 = city_country("Paris", "France");
let result3 = city_country("tokyo", "japan");

//values returned
console.log(result1);
console.log(result2);
console.log(result3);
