export interface Cat {
    breeds: BodyStructure[];
    height: number;
    id: string;
    url: string;
    width: number;
    categories: BodyStructure[]
}

export interface CatResponse {
    breeds: BodyStructure[]
    cats: Cat[]
    categories: BodyStructure[]
}

export interface BodyStructure {
    id: string,
    name: string
}

export interface CategoriesResponse {
    breeds: BodyStructure[];
    categories: BodyStructure[]
}