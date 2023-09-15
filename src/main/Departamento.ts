import { Inmueble } from "./Inmueble";

export class Departamento extends Inmueble{
    protected precio () : number{
        return 350000 * super.cantidadDeAmbientes
    }
}