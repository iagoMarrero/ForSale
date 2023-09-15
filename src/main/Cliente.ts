import { Empleado } from "./Empleado";
import { Inmueble } from "./Inmueble";

export class Cliente {
    private nombre : string;

    public setNombre(unNombre : string){
        this.nombre = unNombre
    }

    public getNombre() : string{
        return this.nombre
    }

    public reservar(inmueble:Inmueble,empleado : Empleado){
        inmueble.getOperacion().reservar(this,empleado);
    }

    public concretar(inmueble:Inmueble,empleado : Empleado){
        inmueble.getOperacion().concretar(this,empleado);
    }
}