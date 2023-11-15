var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//visit
var PlaceToVisit = ["turkey", "kashmir", "dubai", "china"];
//
console.log("\noriginal order:", PlaceToVisit);
//alphabetical order without modifying the original list
console.log("Alphabetical order:", PlaceToVisit);
//
console.log("original order:", PlaceToVisit);
//
console.log("Reverse alphabetical order:", __spreadArray([], PlaceToVisit, true).sort().reverse());
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
PlaceToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", PlaceToVisit);
