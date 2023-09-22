import { CriterioCantOperacionesCerradas } from "./Criterios/CriterioCantOperacionesCerradas";
import { CriterioRanking } from "./Criterios/CriterioRanking";
import { Empleado } from "./Empleado";

export class RankingEmpleados {

    private criterio : CriterioRanking;

    public setCriterio (criterio : CriterioRanking) {
        this.criterio = criterio ;
    }

    public mejorEmpleado(empleados : Empleado[]) : Empleado {
        return this.criterio.mejorEmpleado(empleados);
    }



}