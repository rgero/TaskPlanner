export interface IUser {
    displayName: string,
    email: string,
    password: string,
    comparePasswords(candidatePassword: string): void,
    isModified(inputParam:string): boolean
}