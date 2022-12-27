export class Proyecto {
    id?:number;
    titulo: string;
    lenguaje: string;
    herramientas: string;
    detalle: string;
    git: string;

    constructor(titulo: string, lenguaje: string, herramientas: string, detalle: string, git: string){
        this.titulo = titulo;
        this.lenguaje = lenguaje;
        this.herramientas = herramientas;
        this.detalle = detalle;
        this.git = git;
    }
}
/**
 private int id;
    private String titulo;
    private String lenguaje;
    private String herramientas;
    private String detalle;
    private String git;
 */