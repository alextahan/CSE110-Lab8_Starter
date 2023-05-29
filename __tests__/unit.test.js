// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber()
test('checks 858-123-4567', () => {
    expect(functions.isPhoneNumber('858-123-4567')).toBeTruthy();
});

test('checks (858)123-4567', () => {
    expect(functions.isPhoneNumber('(858)123-4567')).toBeTruthy();
});

test('checks (858) 123 4567', () => {
    expect(functions.isPhoneNumber('(858) 123 4567')).toBeFalsy();
});

test('checks 123-456-789', () => {
    expect(functions.isPhoneNumber('123-456')).toBeFalsy();
});

//isEmail()
test('checks jdoe@ucsd.edu', () => {
    expect(functions.isEmail('jdoe@ucsd.edu')).toBeTruthy();
});

test('checks jdoeucsd.edu', () => {
    expect(functions.isEmail('jdoeucsd.edu')).toBeFalsy();
});

test('checks jdoe@ucsd', () => {
    expect(functions.isEmail('jdoe@ucsd')).toBeFalsy();
});

test('checks jdoe@gmail.com', () => {
    expect(functions.isEmail('jdoe@gmail.com')).toBeTruthy();
});


//isStrongPassword()
test('checks 12345678', () => {
    expect(functions.isStrongPassword('12345678')).toBeFalsy();
});

test('checks a12345678', () => {
    expect(functions.isStrongPassword('a12345678')).toBeTruthy();
});

test('checks a1234567812345678', () => {
    expect(functions.isStrongPassword('a1234567812345678')).toBeFalsy();
});

test('checks suPer_Str0ng_pW', () => {
    expect(functions.isStrongPassword('suPer_Str0ng_pW')).toBeTruthy();
});

//isDate()
test('checks 5/28/2023', () => {
    expect(functions.isDate('5/28/2023')).toBeTruthy();
});

test('checks 05/28/2023', () => {
    expect(functions.isDate('05/28/2023')).toBeTruthy();
});

test('checks 5/28/23', () => {
    expect(functions.isDate('5/28/23')).toBeFalsy();
});

test('checks 5-28-2023', () => {
    expect(functions.isDate('5-28-2023')).toBeFalsy();
});

//isHexColor()
test('check #FFF', () => {
    expect(functions.isHexColor('#FFF')).toBeTruthy();
});

test('check 1a2b3f', () => {
    expect(functions.isHexColor('1a2b3f')).toBeTruthy();
});

test('check #GGG', () => {
    expect(functions.isHexColor('#GGG')).toBeFalsy();
});

test('check 12FF', () => {
    expect(functions.isHexColor('12FF')).toBeFalsy();
});

