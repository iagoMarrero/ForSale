import { Zona } from "../Inmuebles/Zona";
import { Operacion } from "../Operaciones/Operacion";

export class Empleado{
    private operaciones : Operacion[];
    private cantOperacionesCerradas : number = 0;
    private cantOperacionesReservadas : number = 0;
    private comisiones : number = 0;

    constructor() {
        this.operaciones = [];
    }

    public agregarOperacion (unaOperacion : Operacion){
        if(!this.operaciones.includes(unaOperacion))
        this.operaciones.push(unaOperacion);
    }

    public agregarOperacionReservada (unaOperacion : Operacion) {
        this.agregarOperacion(unaOperacion);
        this.cantOperacionesReservadas++;
    }

    public agregarOperacionConcretada (unaOperacion : Operacion) {
        this.agregarOperacion(unaOperacion);
        this.cantOperacionesCerradas++;
        this.comisiones += unaOperacion.comision();
    }

    public getCantOperacionesCerradas (): number {
        return this.cantOperacionesCerradas
    }

    public getCantOperacionesReservadas(): number {
        return this.cantOperacionesReservadas
    }

    public getComisiones () : number {
        return this.comisiones
    }

    private operacionesCerradas () : Operacion[] {
        return [];
    }

    private obtenerZonasDeOperacionesCerradas () : Zona[] {
        return this.operacionesCerradas().map(operacion => operacion.getZona());
    }

    private cerrasteOperacionesEnZonaDe(empleado : Empleado	) : boolean {
        const zonasDeOperacionesCerradas = this.obtenerZonasDeOperacionesCerradas();
        const zonasDelOtroEmpleado = empleado.obtenerZonasDeOperacionesCerradas();
        return zonasDeOperacionesCerradas.some(unaZona => zonasDelOtroEmpleado.includes(unaZona));
    }

    private primereasteA(otroEmpleado : Empleado) : boolean {
        return false;
    }


    public vasATenerProblemasCon(otroEmpleado : Empleado) : boolean{
        return this.cerrasteOperacionesEnZonaDe(otroEmpleado) && this.primereasteA(otroEmpleado)
    }








}