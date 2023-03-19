import user from './../js/age.js';

describe('checkType', () => {
  let userOne;
  userOne = new user(40);

  test('Should be able to use checktype to return the users age and sex', () => {
    expect(userOne.age).toEqual(40);
  });
});

describe('planets', () => {
  let userTwo;
  userTwo = new user(20);

  test('Should return an array with the users age across all planets', () => {
    expect(userTwo.planets()).toEqual([83.2, 32.4, 20, 10.6, 1.68, 0.68, 0.24, 0.12]);
  });  
});

describe('timeUntil', () => {
  let userThree;
  userThree = new user(10);

  test('Should return how long it is until the user reaches X age', () => {
    expect(userThree.timeUntil(18)).toEqual([33.28, 12.96, 8, 4.24, 0.67, 0.27, 0.1, 0.05]);
    expect(userThree.timeUntil(8)).toEqual("That already happened 2 years ago!");
    expect(userThree.timeUntil(10)).toEqual("That will happen this year!");
  });  
});
  describe('timePast', () => {
    let userFour;
    userFour = new user(80);
  
    test('Should return how its been since the user reached Y age', () => {
      expect(userFour.timePast(22)).toEqual([241.28, 93.96, 58, 30.74, 4.87, 1.97, 0.7, 0.35]);
      expect(userFour.timePast(100)).toEqual("That will happen in 20 years!");
      expect(userFour.timePast(80)).toEqual("That happened this year!");
    });  
});
