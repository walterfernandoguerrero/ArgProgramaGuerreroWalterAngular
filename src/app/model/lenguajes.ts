export class Lenguajes {
    id?:number;
    nombreLenguaje: string;
    porcentaje: number;

    constructor(nombreLenguaje: string, porcentaje:number){
        this.nombreLenguaje=nombreLenguaje;
        this.porcentaje=porcentaje;
    }
}
