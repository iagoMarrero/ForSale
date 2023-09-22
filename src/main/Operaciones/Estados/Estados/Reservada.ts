import { Cliente } from "../../../Cliente";
import { Empleado } from "../../../Rankings/Empleado";
import { EstadoOperacion } from "./EstadoOperacion";
import { Operacion } from "../../Operacion";
import { Concretada } from "./Concretada";

export class Reservada extends EstadoOperacion{
    private clienteQueReservo : Cliente;
    private empleadoQueReservo : Empleado;

    constructor(cliente: Cliente,empleado : Empleado,operacion : Operacion) {
        super();
        this.clienteQueReservo = cliente;
        this.empleadoQueReservo = empleado;
        empleado.agregarOperacionReservada(operacion);
    }

    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede reservar, alguien ya ha reservado");
    }
    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        if(this.clienteQueReservo === cliente) {
            operacion.setEstado(new Concretada(empleado,operacion));
        }
        else {
            throw new Error("No se pude concretar porque el cliente no es el mismo que lo reservo");
        }
    }
    
}