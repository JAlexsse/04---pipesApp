export enum Color {
    red,
    black,
    green,
    blue,
    white,
    purple
}

export interface Product {
    name: string;
    value: number;
    color: Color;
    stock: boolean
}