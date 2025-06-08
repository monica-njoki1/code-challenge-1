function calculateChaiIngredients() {
    let cups= prompt("Karibu! How many cups of Chai Bora would you like to make?");
    let numberOfCups= Number(cups);

    let water= 200 * numberOfCups;
    let milk= 50 * numberOfCups;
    let teaLeaves= 1 * numberOfCups;
    let sugar= 2 * numberOfCups;

    console.log("To make ${numberOfCups} cups of kenyan chai, you will need:");
    console.log("Water: ${water} ml");
    console.log("Milk: ${milk} ml");
    console.log("Tea Leaves (Majani): ${teaLeaves} tablespoon");
    console.log("Sugar (Sukari): ${sugar}")
    }
    calculateChaiIngredients()

