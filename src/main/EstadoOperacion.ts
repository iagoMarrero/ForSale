import { Cliente } from "./Cliente";
import { Empleado } from "./Empleado";
import { Operacion } from "./Operacion";

export abstract class EstadoOperacion {
    
    
    public abstract  reservar(cliente : Cliente, empleado : Empleado,operacion : Operacion) : void

    public  abstract concretar(cliente : Cliente,empleado : Empleado,operacion : Operacion) : void
}