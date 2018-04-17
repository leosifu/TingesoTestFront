import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function ListaItems(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <tr>
      <td>{number[0]}</td>
      <td>{number[1]}</td>
      <td>{number[2]}</td>
      <td>{number[3]}</td>
      <td>{number[4]}</td>
    </tr>

  );
  return (
    <tbody>{listItems}</tbody>
  );
}


class Elementos extends React.Component{

  render(){
    return(
      <div>
      <div class="col-sm-6">
          <div class="panel panel-primary">
            <div class="panel-heading">Lista de Items</div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Código </th>
                  <th>Nombre  </th>
                  <th>Fecha de Vencimiento</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <ListaItems numbers={this.props.lista} onClick={this.props.onClick} />

            </table>
          </div>

        </div>
        </div>
    );
  }

}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lista: [['123', 'hola', 'holi', 'buenas', 'jelou'], ['46', 'chau', 'bai', 'nohvimo', 'bendicione'], ['2308', 'uno', 'dos', 'tres', 'cuatro']],
      codigo: '',
      nombre: '',
      fecha: '',
      categoria: '',
      precio: ''
    };
    this.cambio = this.cambio.bind(this);
    this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
  }

  cambio(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  agregar(event){
    var lista = [];
    lista.push(this.state.codigo);
    lista.push(this.state.nombre);
    lista.push(this.state.fecha);
    lista.push(this.state.categoria);
    lista.push(this.state.precio);
    this.state.lista.push(lista);
    console.log(this.state.lista);
  }

  borrar(event){
    if(this.state.codigo === ''){
      alert('Ingrese código');
    }
    else{
      console.log(this.state.lista);
      console.log('olii');
      console.log(this.state.lista);
      var i = 0;
      const largo = this.state.lista.length;
      console.log('asd');
      while(i<largo){
        if(this.state.lista[i][0] === this.state.codigo){
          this.state.lista.splice(i, 1);
          break;
        }
        i++;
      }
    }
  }

  buscar(event){
    if(this.state.codigo === ''){
      alert('Ingrese código');
    }
    else{
      var i = 0;
      const largo = this.state.lista.length;
      console.log('asd');
      while(i<largo){
        if(this.state.lista[i][0] === this.state.codigo){

          this.state.codigo = this.state.lista[i][0];
          var x = document.getElementsByName("codigo");
          x[0].value = this.state.codigo;

          this.state.nombre = this.state.lista[i][1];
          var y = document.getElementsByName("nombre");
          y[0].value = this.state.nombre;

          this.state.fecha = this.state.lista[i][2];
          var z = document.getElementsByName("fecha");
          z[0].value = this.state.fecha;

          this.state.categoria = this.state.lista[i][3];
          var t = document.getElementsByName("categoria");
          t[0].value = this.state.categoria;

          this.state.precio = this.state.lista[i][4];
          var m = document.getElementsByName("precio");
          m[0].value = this.state.precio;

          break;
        }
        i++;
      }
    }

  }

  modificar(event){
    if(this.state.codigo === ''){
      alert('Ingrese código');
    }
    else{
      var i = 0;
      const largo = this.state.lista.length;
      console.log('asd');
      while(i<largo){
        if(this.state.lista[i][0] === this.state.codigo){

          var y = document.getElementsByName("nombre");
          this.state.nombre = y[0].value;
          this.state.lista[i][1] = this.state.nombre;

          var z = document.getElementsByName("fecha");
          this.state.fecha = z[0].value;
          this.state.lista[i][2] = this.state.fecha;

          var t = document.getElementsByName("categoria");
          this.state.categoria = t[0].value;
          this.state.lista[i][3] = this.state.categoria;

          var m = document.getElementsByName("precio");
          this.state.precio = m[0].value;
          this.state.lista[i][4] = this.state.precio;

          break;
        }
        i++;
      }
    }

  }




  render() {
    return (
      <div class="container">
	<div class="row">
	<br/>


    <div class="col-sm-4">

        <table class="table table-bordered">

            <tr>
                <td class="col-sm-1 text-right">
                    <label for="name1">Código del Producto</label>
                </td>
                <td class="col-sm-3">
                     <input name="codigo" class="form-control" onChange={this.cambio}></input>
                </td>
            </tr>
            <tr>
                <td class="col-sm-1 text-right">
                    <label for="family">Nombre del Producto</label>
                </td>
                <td class="col-sm-3">
                    <input name="nombre" class="form-control" onChange={this.cambio}></input>
                </td>
            </tr>
            <tr>
                <td class="col-sm-1 text-right">
                    <label for="family">Fecha de Vencimiento</label>
                </td>
                <td class="col-sm-3">
                    <input name="fecha" class="form-control" onChange={this.cambio}></input>
                </td>
            </tr>
            <tr>
                <td class="col-sm-1 text-right">
                    <label for="family">Categoría</label>
                </td>
                <td class="col-sm-3">
                    <input name="categoria" class="form-control" onChange={this.cambio}></input>
                </td>
            </tr>
            <tr>
                <td class="col-sm-1 text-right">
                    <label for="family">Precio</label>
                </td>
                <td class="col-sm-3">
                    <input name="precio" class="form-control" onChange={this.cambio}></input>
                </td>
            </tr>
            <tr>
              <td class="col-sm-3">
                <button onClick={this.agregar}>Agregar</button><button onClick={this.buscar}>Buscar</button>
              </td>
              <td class="col-sm-3">
                <button onClick={this.modificar}>Editar</button><button onClick={this.borrar}>Borrar</button>
              </td>
            </tr>

        </table>

    </div>
    <Elementos lista={this.state.lista}/>



	</div>
</div>

    );
  }
}




ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
