import React from 'react';
import '../index.css';



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

export default Elementos;
