export default class user {
    constructor(age) {
      this.age = age;
    }



    planets() {
      const Mercury = this.age * 4.16;
      const Venus = this.age * 1.62;
      const Mars = this.age * .53;
      const Jupiter = this.age * .084;
      const Saturn = this.age * .034;
      const Uranus = this.age * .012;
      const Neptune = this.age * .006;

      const planetArray = [Mercury, Venus, this.age, Mars, Jupiter, Saturn, Uranus, Neptune]
      console.log(planetArray)
      return planetArray;
    }
  }

//Mercury = 4.16, Venus = 1.62, Mars = .53, Jupiter = .084, Saturn = .034, Uranus = .012, Neptune = .006