import { Operacion } from "../Operaciones/Operacion";
import { Zona } from "./Zona";

export abstract class Inmueble{
    protected metros2 : number;
    protected cantidadDeAmbientes : number;
    private zona : Zona;
    private operacion : Operacion;


    public setMetros2(unMetro2 : number) {
        this.metros2 = unMetro2
    }

    public getMetros2 () : number {
        return this.metros2
    }

    public precioFinal() : number {
        return this.precio() + this.zona.getValor();
    }

    protected abstract precio() : number;

    public getOperacion() : Operacion{
        return this.operacion
    }

    public getZona() : Zona{
        return this.zona
    }




}