const planets = [
	{name: "Mercury", temperature: 440, distance: 0.39},
	{name: "Venus", temperature: 737, distance: 0.72},
	{name: "Earth", temperature: 288, distance: 1},
	{name: "Mars", temperature: 253, distance: 1.5},
	{name: "Jupiter", temperature: 163, distance: 5.2},
	{name: "Saturn", temperature: 133, distance: 9.58},
	{name: "Uranus", temperature: 78, distance: 19.22},
	{name: "Neptune", temperature: 73, distance: 30.05}
];

const filteredPlanets = planets.filter(({ temperature, distance }) => {
	if (temperature < 253 || temperature > 323) {
		return false;
	}

	if (distance < 0.75 || distance > 1.5) {
		return false;
	}

	return true;
});

console.log(filteredPlanets);