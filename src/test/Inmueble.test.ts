import { Casa } from "../main/Casa";
import { Departamento } from "../main/Departamento";
import { Inmueble } from "../main/Inmueble";
import { PH } from "../main/PH";

test("inmueble", () => {

    //const unInmueble = new Inmueble(); No se puede instanciar porque es una clase abstractas.

    const unCasa = new Casa();

    unCasa.precioFinal();

    const unPH = new PH();

    unPH.precioFinal();

    const unDepartamento = new Departamento();

    unDepartamento.precioFinal();


});