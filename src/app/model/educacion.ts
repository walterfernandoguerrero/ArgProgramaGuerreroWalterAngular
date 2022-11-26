export class Educacion {
    //atributos
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;

    //constructor isnstancia completa sin ID
    constructor(nombreEdu: string, descripcionEdu: string){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
    }
}
