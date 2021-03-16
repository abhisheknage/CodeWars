function Clock(name) {
  this._name = name;
  Object.defineProperty(this, "name", {
    get: () => {
      return this._name;
    },
    set: (name) => {
      return (this._name = name);
    },
  });
}
const newName = new Clock("testName");
newName.name;

console.log(`The name of this clock is ${new Clock("awesome clock").name}`);
