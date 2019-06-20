//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

export const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]/i.test(value) ?
  'Invalid email address.' : undefined

export const passwordRequirement = value =>
  value && !/^(?=.*\d).{8,}$/i.test(value) ?
  'Minimum of 8 charecters and atleast a digit.' : undefined


export const required = value => value ? undefined : 'Required.'

export const confirmPassword = (value,allValues) => 
    value !== allValues.password ?  "Passwords Don't Match." : undefined