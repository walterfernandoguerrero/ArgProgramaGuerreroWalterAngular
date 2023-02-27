export class Lenguajes {
    id?:number;
    nombreLenguaje: string;
    porcentaje: number;
    urlImagen:string;

    //private String UrlImagen;

    constructor(nombreLenguaje: string, porcentaje:number, urlImagen:string){
        this.nombreLenguaje=nombreLenguaje;
        this.porcentaje=porcentaje;
        this.urlImagen=urlImagen;
    }
}
