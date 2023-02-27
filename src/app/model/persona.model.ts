export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    email:String;
    usuario: String;
    password: String;

    /*
    private String email;
    private String usuario;
    private String password;
    * */

    constructor(nombre: String, apellido: String, email:String, usuario:String, password:String){
        this.nombre= nombre;
        this.apellido=apellido;
        this.email=email;
        this.usuario=usuario;
        this.password=password;
    }
}