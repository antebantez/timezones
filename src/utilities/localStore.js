// Usage:
//
// Get started
// import store from './localStore';
//
// Adding values
//   store.someNewPropery = someValue
//   (add as many as you want)
//
// Saving (so that the values survive between visits)
//   store.save();


// Unpack my store from localStorage.store
let store;
try {
  // this might give a runtime error
  // if localStorage.store can't be parsed from JSON
  store = JSON.parse(localStorage.store);
}
catch (e) {
  // if we could not JSON.parse localStorage.store
  // then set store to an empty objecty
  store = {};
}

// Add a save method/function to store
store.save = () => localStorage.store = JSON.stringify(store);

// Export the store so it can be used in other files
export default store; 