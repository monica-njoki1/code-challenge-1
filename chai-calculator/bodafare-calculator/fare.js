const baseFare= 50;
const chargePerKm= 15;
function calculateBodaFare(){
let distance= prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    let distanceInKm= Number(distance);
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log(`Uko kwote? Io ni ${distance} Km:`);
    console.log(`Ukikalia pikipiki: KES ${baseFare}`);
    console.log(`Mpaka uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda pikipiki!`)
}
calculateBodaFare()
