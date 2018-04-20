import React from 'react';
import Elementos from './tabla1';
import '../index.css';
import axios from 'axios';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      lista: [],
      codigo: '',
      nombre: '',
      fecha: '',
      categoria: '',
      precio: 0
    };
    this.cambio = this.cambio.bind(this);
    this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:9090/products`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const lista = res.data;
        this.setState({lista});
        console.log("olii");
        console.log(this.state.lista);
        console.log(this.state.lista[0]);
        console.log(this.state.lista[0].productCode);
      });
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

    const producto = {
      productCode: parseInt(this.state.codigo),
      productName: this.state.nombre,
      category: this.state.categoria,
      price: parseInt(this.state.precio),
      expirationDate: this.state.fecha

    }
    axios.post(`http://localhost:9090/products`,  producto )
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
      });
  this.forceUpdate();
    event.preventDefault();
  }

  borrar(event){
    var link = `http://localhost:9090/products/` + this.state.codigo;
    console.log(link);
    axios.delete(link)
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
    });

  }

  buscar(event){
    var link = `http://localhost:9090/products/` + this.state.codigo;
    console.log(link);
    axios.get(link)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.price);
        var x = document.getElementsByName("codigo");
        x[0].value = res.data.productCode;
        var y = document.getElementsByName("nombre");
        y[0].value = res.data.productName;

        var z = document.getElementsByName("fecha");
        var fecha = new Date(res.data.expirationDate + 86400000);
        z[0].value = fecha.toISOString().substr(0, 10);

        var t = document.getElementsByName("categoria");
        t[0].value = res.data.category;
        var m = document.getElementsByName("precio");
        m[0].value = res.data.price;
      });

  }

  modificar(event){
    var link = `http://localhost:9090/products?code=` + this.state.codigo + `&price=` + this.state.precio;
    console.log(link);
    const producto = {
      productCode: parseInt(this.state.codigo),
      price: parseInt(this.state.precio),

    };

    axios.put(link, producto)
      .then(res => {
        console.log(res);

      }).catch(error => {
      console.log(error.response)
      });


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
                     <input type="number" min="num" name="codigo" class="form-control" onChange={this.cambio}></input>
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
                    <input type="date" name="fecha" class="form-control" onChange={this.cambio}></input>
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
                    <input type="number" min="1" name="precio" class="form-control" onChange={this.cambio}></input>
                </td>
            </tr>

        </table>
        <button onClick={this.agregar}>Crear</button><button onClick={this.buscar}>Buscar</button>
        <button onClick={this.modificar}>Editar</button><button onClick={this.borrar}>Borrar</button>

    </div>
    <Elementos lista={this.state.lista}/>



	</div>
</div>

    );
  }
}

export default Form1;
