//visit
const PlaceToVisit: string[] = ["turkey", "kashmir", "dubai", "china"];

//
console.log("\noriginal order:", PlaceToVisit);

//alphabetical order without modifying the original list
console.log("Alphabetical order:", PlaceToVisit);

//
console.log("original order:",PlaceToVisit);

//
console.log("Reverse alphabetical order:",[...PlaceToVisit].sort().reverse());

//
console.log("original order:", PlaceToVisit);

//reverse the order of the list
PlaceToVisit.reverse();
console.log("Reversed order:", PlaceToVisit);

//
PlaceToVisit.reverse();
console.log("original order:", PlaceToVisit);

//alphabetical order
PlaceToVisit.sort();
console.log("sorted in alphabetical order:", PlaceToVisit);

//reverse alphabetical order
PlaceToVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", PlaceToVisit);
