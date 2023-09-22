import { Empleado } from "../Empleado";

export interface CriterioRanking {

    mejorEmpleado(empleados : Empleado[]) : Empleado;
}