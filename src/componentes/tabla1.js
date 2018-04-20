import React from 'react';
import '../index.css';


function showDate(date){
  var otraDate = new Date(date + 86400000);
  console.log(otraDate);
  console.log(otraDate.getMonth());
  var fecha = otraDate.getDate() + '/' + (otraDate.getMonth()+1) +'/' + otraDate.getFullYear();
  return fecha;
}

function ListaItems(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <tr>
      <td>{number.productCode}</td>
      <td>{number.productName}</td>
      <td>{showDate(number.expirationDate)}</td>
      <td>{number.category}</td>
      <td>{number.price}</td>
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
                  <th type>Fecha de Vencimiento</th>
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

export default Elementos;
