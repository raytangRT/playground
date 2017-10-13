export interface Height{
    ft: Number, 
    in: Number
}

export interface Hero {
    id: Number, 
    name: string, 
    aliases: string[], 
    occupation: string, 
    gender: string, 
    height: Height, 
    hair: string, 
    eyes: string, 
    powers: string[]
}