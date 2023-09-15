import { Cliente } from "../../Cliente";
import { Empleado } from "../../Empleado";
import { EstadoOperacion } from "../../EstadoOperacion";
import { Operacion } from "../../Operacion";
import { Concretada } from "./Concretada";
import { Reservada } from "./Reservada";

export class Publicada extends EstadoOperacion{

    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.setEstado(new Reservada(cliente,empleado));
    }

    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.setEstado(new Concretada());
    }
}