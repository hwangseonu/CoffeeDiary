export interface BlendInfo {
    name: string,
    roastDate: Date,
    beans: BeanInfo[],
}

export interface BeanInfo {
    name: string,
    ratio: number,
    color: string,
}

export interface RecipeInfo {
    brewer: string,
    dose: number,
    extract: number,
    temperature: number,
    grinder?: string,
    grindSize?: number,
    dynamics: string,
}

export interface NoteInfo {
    notes: string[],
    colors: string[],
}

export interface SensualityInfo {
    body: number,
    clarity: number,
    acidity: number,
    sweetness: number,
    bitter: number,
    aftertaste: number,
    balance: number,
    [key: string]: number,
}

