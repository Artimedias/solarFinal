import user from './../js/age.js';

describe('checkType', () => {
  let userOne;
  userOne = new user(42);

  test('Should be able to use checktype to return the users age and sex', () => {
    expect(userOne.age).toEqual(42);
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
