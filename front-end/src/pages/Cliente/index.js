import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'reactstrap'
import { FaEye,FaUsers } from 'react-icons/fa';

function Cliente() {

  //Hooks
  const [listaCliente,setListaCliente] = useState([]);
 
  //APi em real time
  useEffect(()=>{

    function loadApi(){

      let url='http://localhost:3000/clientes';

      fetch(url)
      .then((resposta)=>resposta.json())
      .then((json)=>{
        setListaCliente(json);
       
      })

    }

    loadApi();

  },[]);

  //Metodo que atribui ao objeto uma indice numerica
  function mostrarCliente(){
    //Cria um atributo com um vetor nulo
    let arrayLista=[];
    //percorre o Objeto
    for(let key in listaCliente){
      //atribui a chave numerica na chave do objeto no vetor arrayLista

      arrayLista.push([key,listaCliente[key]])
    }
    return arrayLista
  }
  
  return (
    <div className="container">
      <h3><FaUsers/> Lista de clientes</h3>
      <Table responsive className='table-hover'>
        <thead >
          <tr>
            <th>
              Clientes
            </th>
            
            <th>
              Ação
            </th>
          </tr> 
        </thead>
        {//Percorre o metodo para listar clientes
          mostrarCliente().map((valor,key)=>{
                
            return(
              <tbody key={key}>
                <tr key={key}>
                  <td>
                    {valor[1]['name']}
                  </td>
                  <td>
                    <Link  className='btn btn-primary btn-sm' to={`/oportunidades/${valor[1]['email'] }`}> <FaEye/> Visualizar cliente</Link>
                  </td>
                </tr>
              </tbody>
            ) 
          })
        } 
      </Table>
    </div>
  );
}

export default Cliente;
