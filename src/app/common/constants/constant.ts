export const INVALID = {
    required: 'This field is required.',
    minlength: (params: any) => `Minimum length is ${params.requiredLength}.`,
    maxlength: (params: any) => `Maximum length is ${params.requiredLength}.`,
    pattern: 'Invalid format.',
    email: 'Invalid email address.',
    min: (params: any) => `Value must be greater than or equal to ${params.min}.`,
    max: (params: any) => `Value must be less than or equal to ${params.max}.`,
    customError: (errorMessage: string) => errorMessage || 'Invalid input.'
}

export const ERROR_TYPES = {
    required: 'required',
    minlength: 'minlength',
    maxlength: 'maxlength',
    pattern: 'pattern',
    email: 'email',
    min: 'min',
    max: 'max'
}