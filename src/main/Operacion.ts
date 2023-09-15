import { Cliente } from "./Cliente";
import { Empleado } from "./Empleado";
import { EstadoOperacion } from "./EstadoOperacion";
import { Inmueble } from "./Inmueble";
import { Publicada } from "./Operaciones/Estados/Publicada";

export abstract class Operacion {
    private estado : EstadoOperacion;

    constructor() {
        this.estado = new Publicada();
    }

    public setEstado(unEstado : EstadoOperacion){
        this.estado = unEstado
    }

    public abstract comision () : number;

    protected inmueble : Inmueble

    public  reservar(cliente : Cliente, empleado : Empleado){
        this.estado.reservar(cliente,empleado,this);
    }

    public  concretar(cliente : Cliente,empleado : Empleado){
        this.estado.concretar(cliente,empleado,this);
    }

}