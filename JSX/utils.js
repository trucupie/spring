// We have three possible observation statuses
const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

/**
 * Returns a random observation status from the array above
 */
const getRandomStatus = () => {
  const randomIndex = Math.floor(Math.random() * observationStatuses.length);
  return observationStatuses[randomIndex];
};
