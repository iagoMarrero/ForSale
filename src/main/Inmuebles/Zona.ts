export class Zona{
    private nombre : string;
    private valor : number;

    public setNombre(unNombre:string) {
        this.nombre = unNombre
    }

    public setValor(unValor:number) {
        this.valor = unValor
    }

    public getNombre () : string {
        return this.nombre
    }

    public getValor () : number {
        return this.valor
    }
}