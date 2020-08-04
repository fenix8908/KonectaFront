import { Empleado } from './../../models/empleado';
import { EmpleadoService } from './../../service/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  fecha_ingreso = new Date()
  nombre:''
  salario:0


  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const empleado = new Empleado(this.fecha_ingreso, this.nombre, this.salario);
    this.empleadoService.save(empleado).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        this.router.navigate(['/']);
      }
    );
  }

}
