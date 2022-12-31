import logo from './blackhole.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name={"Tomás"}></Greeting> */}
        {/*<GreetingF name={"Tomi"}></GreetingF>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/*<ContactListComponent></ContactListComponent>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre="Tomi">
          <h3>Contenido del props.children</h3>
        </Ejemplo4>*/}
        {/*<GreetingStyled name={'Tomi'}></GreetingStyled>*/}
        <Clock></Clock>
      </header>
    </div>
  );
}
export default App;
