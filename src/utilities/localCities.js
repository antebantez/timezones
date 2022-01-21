let cities;
try {
  cities = JSON.parse(localStorage.cities);
} catch (e) {
  cities = {};
}
cities.save = () => (localStorage.cities = JSON.stringify(cities));
export default cities;