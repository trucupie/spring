/* Task 1: Track Animal Sightings */
function sightings(...animals) {
	console.log(`Animal Signtings: ${animals}`);
}
sightings("Elephant", "Rhino", "Tiger");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const habitats = [...forestHabitats, ...savannahHabitats];
console.log(`Combined Habitats: ${habitats}`);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
const updatedRhinoStatus = {
	...rhinoStatus,
	population: 0,
	status: 'Extinct'
};
console.log(`Updated Rhino Status: ${updatedRhinoStatus}`);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
const geneticLionProfile = {
	...lionProfile,
	genetics: 'Clone'

};
console.log(`Original Lion Profile: ${lionProfile}`);
console.log(`Lion Genetic Profile:" ${geneticLionProfile}`);
/*
 * Observations:
 * modifying the copied object does not affect the original object since a shallow copy was performed.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Plentiful"}};
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);
/*
 * Observations:
 * Modifying a nested property in a shallow copy also affects the original object.
 * This occurs because the spread operator performs a shallow copy, meaning that nested objects are not duplicated but rather reference the same object in memory.
 */
