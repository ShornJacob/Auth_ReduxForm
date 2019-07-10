import { emailFormat, passwordRequirement, required, confirmPassword } from './validations'

//testing using Jest matchers
describe('Email Format tests', () => {
    test('A Proper email return undefined', () => {
        expect(emailFormat('test123@email.com')).toBe(undefined)
    })

    test('Name is invalid', () => {
        expect(emailFormat("Aname")).toBe('Invalid email address.')
    })

    test('Without domain is error', () => {
        expect(emailFormat("test123@gr")).toBe('Invalid email address.')
    })

    test('Have a dot but no domain is error', () => {
        expect(emailFormat("test123@gr")).toBe('Invalid email address.')
    })

    
    test('Having only one digit in domain is OK', () => {
        expect(emailFormat("test123@gr.f")).toBe(undefined)
    })
})

describe('Password Requirement tests', () => {
    test('Proper passwords return undefined', () => {
        expect(passwordRequirement('1234567a')).toBe(undefined)
    })

    test('Proper passwords return undefined', () => {
        expect(passwordRequirement('a1234567')).toBe(undefined)
    })

    test('Proper passwords return undefined', () => {
        expect(passwordRequirement('1234a567')).toBe(undefined)
    })

    test('Not a minimum of 8 charecters  is error', () => {
        expect(passwordRequirement('1234567')).toBe('Minimum of 8 charecters and atleast a digit.')
    })

    test('Only alphabets is Error', () => {
        expect(passwordRequirement('abcdefghij')).toBe('Minimum of 8 charecters and atleast a digit.')
    })

    test('Only digits is Error', () => {
        expect(passwordRequirement('12345678')).toBe('Minimum of 8 charecters and atleast a digit.')
    })

})


describe("required test", () => {
    test('undefined is error', () => {
        expect(required(undefined)).toBe('Required.')
    })

    test("Nothing inside quotation marks is error", () => {
        expect(required("")).toBe('Required.')
    })

    test("Nothing inside apostrophe marks is error", () => {
        expect(required('')).toBe('Required.')
    })

    test("An input returns undefined", () => {
        expect(required('a')).toBe(undefined)
    })

})

describe("Confirm Password tests", ()=> {
    test("A namesake test for Confirm Password", () => {
        expect(confirmPassword('12345678a',{password:'12345678a'})).toBe(undefined)
    })

})