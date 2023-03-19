import user from './../js/age.js';

describe('checkType', () => {
  let userOne;
  userOne = new user(42);

  test('Should be able to use checktype to return the users age and sex', () => {
    expect(userOne.age).toEqual(42);
  });
});

describe('planets', () => {
  let normalFemale;
  normalFemale = new user(20, "female");

  test('Should return an array with the users age across all planets', () => {
    expect(normalFemale.planets()).toEqual([83.2, 32.4, 20, 10.6, 1.68, 0.68, 0.24, 0.12]);
  });  
});
