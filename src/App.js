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
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import CreateForm from './components/pure/forms/createForm';

function App() {
  return (
    <div className="App">
{/*       <header className="App-header">*/} 
      <img src={logo} className="App-logo mb-5" alt="logo" />
        {/*<Greeting name={"Tomás"}></Greeting> */}
        {/*<GreetingF name={"Tomi"}></GreetingF>*/}        
        {/*<ContactListComponent></ContactListComponent>*/}
        {/*<Ejemplo1></Ejemplo1>*/}
        {/*<Ejemplo2></Ejemplo2>*/}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/*<Ejemplo4 nombre="Tomi">
          <h3>Contenido del props.children</h3>
        </Ejemplo4>*/}
        {/* <GreetingStyled name={'Tomi'}></GreetingStyled> */}
        {/*<Clock></Clock>*/}
        {/*       </header>*/}
        {/* Gestion de eventos!! */}
        {/* <Father></Father> */}

        {/* RENDERIZADO CONDICIONAL */}
        {/* <OptionalRender></OptionalRender> */}

        {/* Proyecto Final */}
        {/*<TaskListComponent></TaskListComponent>*/}

        {/* Usando Formik y Yup */}
        {/* <LoginFormik></LoginFormik> */}
        <CreateForm></CreateForm>
        {/* <RegisterFormik></RegisterFormik> */}
    </div>
  );
}
export default App;
