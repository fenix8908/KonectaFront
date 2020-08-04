
export class Empleado{
    fecha_ingreso:Date
    nombre:string;
    salario:number;

    constructor(fecha_ingreso:Date, nombre:string, salario:number){
        this.fecha_ingreso = fecha_ingreso;
        this.nombre = nombre;
        this.salario = salario;
    }
}