import './App.css';
import ComponenteA from './components/1_Componentes/ComponenteA';
import Clock from './components/2_CicloDeVidaComponente/cicloDeVidaClass';
import ClockFunction from './components/2_CicloDeVidaComponente/cicloDeVidaFunction';
import ListaContactos from './components/3_ListaContactos/ListaContactos';
import ComponenteEstado from './components/ComponenteEstado/ComponenteEstado';
import EjemploUseState from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Square from './components/4_ColorsEvents/Square'
import TaskFormik from './components/5_TaskFormikYup/TaskFormik';

function App() {
  return (
    <div className="App">
      {/* <ComponenteA /> */}
      {/* <EjemploUseState /> */}
      {/* <Ejemplo2 /> */}
      {/* <MiComponenteConContexto /> */}
      {/* <Ejemplo4 nombre='isaac'><h3>Contenido de props.children</h3></Ejemplo4> */}
      {/* <ComponenteEstado /> */}
      {/* <Clock /> */}
      {/* <ClockFunction /> */}
      {/* <ListaContactos /> */}
      {/* <Square /> */}
      <TaskFormik />
    </div>
  );
}

export default App;
