
# REACT JS

Biblioteca JS que utilizei como front-end para consumir o API do Node js 

# Versão do node
v16.15.1

# Dependências utilizado - Não precisa instalar

- Bootstrap (reactstrap)
- React-icons (Icones)
- React Router dom (Rotas)
- React Toastyfy (Mostrar notificações)

# Execução 
 instalar: npm install react-scripts --save
 executar: npm start

# Decisões de implementação tomadas

* Realizei a divisão dos componentes em pasta com o nome: Componentes que contem o nav e o footer, Pages que contém a pasta Cliente e Oportunidades, dentro de cada o arquivo index.js.
* Criado um arquivo .ENV para mudar a porta para 3001.
* Criado um arquivo Rotas.js para redirecionamento de páginas.

Clientes : onde lista todos os clientes usando o HOOK "são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe."
Para consumir a API utilizei o hook useEffect-que atualiza em tempo real, dentro criei uma função loadApi() que atribui a url do api com o metodo nativo do js FETCH 

Criei também uma função mostrarCliente que atribui uma indice ao objeto para utilizar o array.map percorrendo cada elemento de acordo com suas indice.
para cada listagem de clientes atribuir um botão que contém a url com seu respectivo id(chave) e ao clicar redireciona para a página de oportunidades.

Oportunidades: onde lista todos os clientes com suas informaçoes e uma interfaçe que mostra as oportunidades, todos usando o hook useEffect para consumir a API passando para o metodo fetch a url com o id 
e useState para mudança de state. para cada oportunidade contém um botão com evento onClick que contendo um callBack com a função alterarStatus(status,indice) passando como parâmetro o status e a indice dentro dessa função
uma constante result que contém o valor e sua indice, a constante realiza um map.

dentro do array.map(), retiro o primeiro valor não usado e crio uma variavel data com a sua chave equivalente a oportunidade selecionada, após isso faz a condicional if que 
verifica se o status atual é identico a true sendo assim atribui ao data[isActive] o valor false, caso contrario realiza o mesmo evento, se o status atual for identico false
atribui ao data[isActive] o valor false.

Após isso crio um novo objeto com os dados alterado, passando o objeto via API, com o verbo PUT para modificar o endpoint opportunities.

# Ambiente de desenvolvimento

* VsCode, com 2 de espaçamentos.
* Ambiente LINUX.
* Postman para testar a API


