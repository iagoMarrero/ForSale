import { Casa } from "../main/Inmuebles/Casa";
import { Departamento } from "../main/Inmuebles/Departamento";
import { Inmueble } from "../main/Inmuebles/Inmueble";
import { PH } from "../main/Inmuebles/PH";

test("inmueble", () => {

    //const unInmueble = new Inmueble(); No se puede instanciar porque es una clase abstractas.

    const unCasa = new Casa();

    unCasa.precioFinal();

    const unPH = new PH();

    unPH.precioFinal();

    const unDepartamento = new Departamento();

    unDepartamento.precioFinal();


});