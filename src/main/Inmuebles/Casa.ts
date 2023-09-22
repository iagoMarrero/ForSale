import { Inmueble } from "./Inmueble";

export class Casa extends Inmueble{
    private valor : number;

    public setValor (unValor : number) {
        this.valor = unValor
    }

    public getValor () : number {
        return this.valor
    }

    protected precio () : number {
        return this.valor
    }
}