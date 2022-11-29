export class DatosPersonales {
    id?: number;
    nombre: string;
    mail: string;
    telefono: string;
    direccion: string;
    imagen: string;

    constructor(nombre:string, mail:string, telefono:string, direccion:string, imagen:string){
        this.nombre=nombre;
        this.mail=mail;
        this.telefono=telefono;
        this.direccion=direccion;
        this.imagen=imagen;
    }
}
