import { Empleado } from "../Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class CriterioComision implements CriterioRanking {

    mejorEmpleado(empleados: Empleado[]): Empleado {

        var mejorEmpleado = empleados[0]

        empleados.forEach(empleado => {
           if(empleado.getComisiones() >= mejorEmpleado.getComisiones()){
            mejorEmpleado = empleado
           }
            
        });
        return mejorEmpleado;
    }









}