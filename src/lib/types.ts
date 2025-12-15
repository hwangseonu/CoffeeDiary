export interface BlendInfo {
    roastDate: Date,
    roastLevel: string,
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
    [key: string]: number,
    body: number,
    clarity: number,
    acidity: number,
    sweetness: number,
    aroma: number,
    bitter: number,
    aftertaste: number,
    balance: number,
}

export interface CoffeeRecord {
    title: string,
    description: string,
    score: number,
    date: Date,
    blend: BlendInfo,
    recipe: RecipeInfo,
    note: NoteInfo,
    sensuality: SensualityInfo,
}
