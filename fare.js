const baseFare= KES50;
const chargePerKm= KES15;
function calculateBodaFare(){
let distance= prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    let distanceInKm= Number(distance);
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log("Uko kwote? Io ni ${distance} Km:");
    console.log("Ukikalia pikipiki: ${baseFare}");
    console.log("Mpaka uko: ${distanceInKm * chargePerKm}");
    console.log("Total: ${totalFare}");
    console.log("Panda pikipiki!")
}
calculateBodaFare()
