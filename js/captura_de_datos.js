class Empleado {
    constructor(id, cui, nit, nombres, apellidos, fecha, direccion, sexo, telefono, iggs, cargo) {
        this.id = id;
        this.cui = cui;
        this.nit = nit;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fecha = fecha;
        this.direccion = direccion;
        this.sexo = sexo;
        this.telefono = telefono;
        this.iggs = iggs;
        this.cargo = cargo; 
    }
}

class UI{
    addEmpleado(empleado) {
        const listaempleado = document.getElementById('empleado-list');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${empleado.id} -
                    <strong>Price</strong>: ${empleado.cui} - 
                    <strong>Year</strong>: ${empleado.nit}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    listaempleado.appendChild(elemento);
  }
}



document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        e.preventDefault();

        const id = document.getElementById("id").value;
        const cui = document.getElementById("cui").value;
        const nit = document.getElementById("nit").value;
        const nombres = document.getElementById("nombres").value;
        const apellidos = document.getElementById("apellidos").value;
        const fecha = document.getElementById("fecha").value;
        const direccion = document.getElementById("direccion").value;
        const sexo = document.getElementById("estadoSexo").value;
        const telefono = document.getElementById("telefono").value;
        const iggs = document.getElementById("iggs").value;
        const cargo = document.getElementById("estadoCargo").value;

        const empleado = new Empleado(id, cui, nit, nombres, apellidos, fecha, direccion, sexo, telefono, iggs, cargo);
        const ui = new UI();
        ui.addEmpleado(empleado);

        
    });