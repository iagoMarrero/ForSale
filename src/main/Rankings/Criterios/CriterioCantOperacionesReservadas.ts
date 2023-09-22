import { Empleado } from "../Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class CriterioCantOperacionesReservadas implements CriterioRanking{

        mejorEmpleado(empleados: Empleado[]): Empleado {

        var mejorEmpleado = empleados[0]

        empleados.forEach(empleado => {
           if(empleado.getCantOperacionesReservadas() >= mejorEmpleado.getCantOperacionesReservadas()){
            mejorEmpleado = empleado
           }
            
        });
        return mejorEmpleado;
    }

}