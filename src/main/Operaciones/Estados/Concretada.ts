import { Cliente } from "../../Cliente";
import { Empleado } from "../../Empleado";
import { EstadoOperacion } from "../../EstadoOperacion";
import { Operacion } from "../../Operacion";

export class Concretada extends EstadoOperacion{
    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede reservar porque ya ha sido concretada");
    }
    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede volver a concretar, ya esta concretado");
    }
    
}