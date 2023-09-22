import { Cliente } from "../Cliente";
import { Empleado } from "../Rankings/Empleado";
import { EstadoOperacion } from "./Estados/Estados/EstadoOperacion";
import { Inmueble } from "../Inmuebles/Inmueble";
import { Publicada } from "./Estados/Estados/Publicada";
import { Zona } from "../Inmuebles/Zona";

export abstract class Operacion {
    private estado : EstadoOperacion;

    constructor() {
        this.estado = new Publicada();
    }

    public getZona() : Zona {
        return this.inmueble.getZona()
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