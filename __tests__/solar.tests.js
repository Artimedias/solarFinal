import user from './../js/age.js';

describe('checkType', () => {
  let normalMale;
  normalMale = new user(42, "male");

  test('Should be able to use checktype to return the users age and sex', () => {
    expect(normalMale.checkType()[0]).toEqual(42);
    expect(normalMale.checkType()[1]).toEqual("male");
  });
});

describe('planets', () => {
  let normalFemale;
  normalFemale = new user(42, "female");

  test('Should return an array with the users age across all planets', () => {
    expect(normalFemale.planets()).toEqual([0, 0.27, 0.62, 1.88, 11.86, 29.46, 84.01, 164.8]);
  });
});
