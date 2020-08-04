import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmpleadoService {

    constructor(private http: HttpClient) { }


    empleadoUrl = "http://localhost:8080/empleado/"


    public lista(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.empleadoUrl + 'lista');
    }

    public save(empleado:Empleado):Observable<any>{
        return this.http.post<any>(this.empleadoUrl +'crear',empleado);
      }


}
