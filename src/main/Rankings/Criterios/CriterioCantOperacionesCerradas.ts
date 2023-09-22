import { Empleado } from "../Empleado";
import { CriterioComision } from "./CriterioComision";

export class CriterioCantOperacionesCerradas implements CriterioComision{

        mejorEmpleado(empleados: Empleado[]): Empleado {

        var mejorEmpleado = empleados[0]

        empleados.forEach(empleado => {
           if(empleado.getCantOperacionesCerradas() >= mejorEmpleado.getCantOperacionesCerradas()){
            mejorEmpleado = empleado
           }
            
        });
        return mejorEmpleado;
    }

}