export default class user {
    constructor(age) {
      this.age = age;
      this.relative = [4.16, 1.62, 1, .53, .084, .034, .012, .006]
    }
    planets() {
      const planetArray = [];
      for(let i = 0; i < 8; i++)
      {
        planetArray.push((this.age * this.relative[i]).toFixed(2))
        planetArray[i] = parseFloat(planetArray[i])
      }
      return planetArray;
    }
    timeUntil(x) {
      const untilArray = [];

      x -= this.age;

      if(x > 0)
      {
        for(let i = 0; i < 8; i++)
        {
          untilArray.push((x * this.relative[i]).toFixed(2))
          untilArray[i] = parseFloat(untilArray[i])
        }
        return untilArray;
      }
      else if(x < 0)
      {
        return (`That already happened ${Math.abs(x)} years ago!`)
      }
      else
      {
        return ("That will happen this year!")
      }
    }
    timePast(y) {
      const pastArray = [];

      y -= this.age;

      if(y > 0)
      {
        for(let i = 0; i < 8; i++)
        {
          pastArray.push((y * this.relative[i]).toFixed(2))
          pastArray[i] = parseFloat(pastArray[i])
        }
        return pastArray;
      }
      else if(y < 0)
      {
        return (`That already happened ${Math.abs(y)} years ago!`)
      }
      else
      {
        return ("That will happen this year!")
      }
    }
  }

//Mercury = 4.16, Venus = 1.62, Mars = .53, Jupiter = .084, Saturn = .034, Uranus = .012, Neptune = .006