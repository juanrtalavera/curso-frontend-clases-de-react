import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm/UserForm';

function App() {
  const initialState = {name: "", surname: "", email: "", photo: ""}
  const [userData, setUserData] = useState(initialState)

  
  function changeData(e){
    setUserData({... userData, [e.target.name]: e.target.value})
    }

  /* function changeSurname(e){
    setUserData({... userData, surname: e.target.value})
    } */
  
  return (
    <div className="App">
      <h1>Regístrate</h1>
      <section>
       <UserForm userData={userData} handleChangeData={changeData}></UserForm>
      </section>
      <section>
        <h2>Resumen del formulario</h2>
        <h5>['Hola, me llamo ${userData.name} ${setUserData.surname} </h5>
        <img src={userData.photo}></img>
      </section>
    </div>
  );
}

export default App;
