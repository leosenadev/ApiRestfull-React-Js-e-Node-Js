import React,{useParams,Link,useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import {Table} from 'reactstrap';
import { toast} from 'react-toastify';
import { IoChevronBackCircleOutline} from 'react-icons/io5';
import { FaRegClipboard,FaUserAlt } from 'react-icons/fa';
import { GrUpdate } from "react-icons/gr";

function Oportunidades(){

  //Hook - Atribuicao e manipulação da coleçao de dados
  //lista e atribui, Oportunidades
  const [listarOportunidades,setListarOportunidades] = useState([]);
  //lista e atribui, Clientes
  const [listarClientes,setListarClientes] = useState([]);


  //recupera o id
  const {id} = useParams();
  //função de redirecionamento
  const navega = useNavigate();
  //lista as oportunidades em tempo real
  useEffect(()=>{

    function loadOportunidades(){

      let url=`http://localhost:3000/oportunidades/${id}`;

      fetch(url)
      .then((resposta)=>resposta.json())
      .then((json)=>{
       //atribui os dados do json ao hook 
       setListarOportunidades(json)
       
      
      })

    }

    loadOportunidades();

    function loadClientes(){

      let url=`http://localhost:3000/cliente/${id}`;

      fetch(url)
      .then((resposta)=>resposta.json())
      .then((json)=>{
       //atribui os dados do json ao hook      
       setListarClientes(json)
       
      
      })

    }

    loadClientes();

  },[id]);
  //Função que atribui ao objeto uma indice numerica, convertendo cada elemento em array
  function mostrarOportunidades(){
    
    //Cria um atributo com um vetor nulo
    let arrayLista=[];
    //percorre o Objeto
    for(let key in listarOportunidades){
      //atribui a chave numerica na chave do objeto no vetor arrayLista
      arrayLista.push([key,listarOportunidades[key]])
    }
    return arrayLista
  }


  function alterarStatus(status,chave){

  
    //Metodo que atribui ao objeto uma indice numerica
    const result = Object.keys(listarOportunidades).map(function (key) {
        
      return [key, listarOportunidades[key]];
    
    });
    //define as variaveis global para uso dos dados externo
    var obj;
    var element   
    result.map((valor)=>{
      //remove o primeiro elemento nao usado
      element = valor.pop();

        //pega o elemento de uma chave
      let data = element[chave] 
    
      //faz a condicional para comparar o status atual

      if(status === true){ //se o status atual for igual a true, atribui o novo valor para false
        //atribui um novo valor,false
        data['isActive'] = false

      }else if(status === false){ //caso se o status atual for igual a false, atribui o novo valor para true

        //atribui um novo valor,true  
        data['isActive'] = true

      }
      
      //cria um objeto com novos valores atribuido
      let novoElement = [];
      element.map((valor)=>{
        
        novoElement.push(valor) 

      })
     
      //atribui a propiedade e o elemento como objeto
      obj = Object.assign({'opportunities':novoElement});

     
    })
   
    //Atualiza o novos dados, metodo PUT

    let url=`http://localhost:3000/update/${id}`

    fetch(url, { 
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json', 'Content-Type': 'application/json'
      }, 
      method: "put", 
      body: JSON.stringify(obj)
    }) 
    .then(function(res){
      //mensagem de sucesso na requisição
      toast.success("Dados Atualizado!");
      //atualiza a página
      navega('/oportunidades/'+id)
      //console.log(res) 
    }) 
    .catch(function(res){ 
      console.log(res)
    })

   
  }

  return(
   
    <div className="container">
      <Link className="btn btn-sm btn-primary mt-4" to="/"><IoChevronBackCircleOutline/>Voltar</Link><br/>
    
      <div className="card mt-3">
        <div className="card-header">
         <strong><FaUserAlt/> Cliente : </strong>{listarClientes['name']}
        </div>
        <div className="card-body">
            <Table responsive className='table-hover'>
              <thead >
                <tr>
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Is active
                  </th>
                  <th>
                    Phone
                  </th>
                  <th>
                    Revenue
                  </th>
                  
                  <th>
                    Agreed terms
                  </th>
                </tr> 
              </thead>
              
              <tbody>
                <tr>
                  <td>{listarClientes['name']}</td>
                  <td>{listarClientes['email']}</td>
                  <td>{String(listarClientes['isActive'] ? 'Ativo' : 'Inativo')}</td>
                  <td>{listarClientes['phone']}</td>
                  <td>{listarClientes['revenue']}</td>
                  <td>{String(listarClientes['agreedTerms'] ? 'Ativo' : 'Inativo')}</td>
                </tr>

              </tbody>
                                      

            </Table>
        </div>    
      </div>
      <div className="card mt-3">
        <div className="card-header">
         <strong><FaRegClipboard/> Oportunidades: </strong>{listarClientes['name']}
        </div>
        <div className="card-body">

          <Table responsive className='table-hover'>
            <thead >
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Limit
                </th>
                <th>
                  Interest
                </th>
                <th>
                  Term
                </th>
                <th>
                  Is Active
                </th>
                
                <th>
                  Ação
                </th>
              </tr> 
            </thead>
            { 
            mostrarOportunidades().map((valor,key)=>{
              
              return(
                //verifica se existe conteudo,se 
                valor[1].length !== 0 ?
                valor[1].map((valor,key)=>{
                  return(
                    <tbody key={key}>
                    <tr key={key}>
                      <td>{valor['name']}</td>
                      <td>{valor['limit']}</td>
                      <td>{valor['interest']}</td>
                      <td>{valor['term']}</td>
                      <td>{valor['isActive'] ? <strong className="text-success">Ativo</strong>  : <strong className="text-danger">Inativo</strong>}</td>
                      <td><button className='btn btn-primary btn-sm' onClick={()=>alterarStatus(valor['isActive'],key)}><GrUpdate/> Alterar status</button></td>
                    </tr>
                    </tbody>
                    
                  )
                })
                : //se nao existir mostra a mensagem 
                <tbody key={key}>
                  <tr key={key}>
                    <td>
                      <h5 className="text-danger">Nenhum registro de oportunidades!</h5> 
                    </td>
                  
                  </tr>
            
                </tbody>
              )
              
            })
            

            }     
                
          </Table>
        </div>
      </div>
    </div>
         

  )

}
export default Oportunidades;