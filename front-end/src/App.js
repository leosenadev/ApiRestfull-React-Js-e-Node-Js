import Rotas from './Rotas';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/style.css';
function App() {

    return(
      <div>
      <ToastContainer autoClose={3000}/>
      <Rotas/>
      </div>
    )

}

export default App;
