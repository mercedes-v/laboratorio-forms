import "./App.css";
import { registerUser } from "./services/registerUser";

function App() {
  const [email, setemail] = usestate("");
const [name, setname] = usestate("");
  const [age, setage] = usestate(+18);
  const [pasawordcheck, setpasawwordcheck] = usestate("");
  const [formErrors, setFormErrors]= usestate({
    
email: undefined,
name: undefined,
age: undefined
  });
 const onsubmit = (data) => {
registerUser(data);
 };
 const isvalid =  object.values(formErrors).every()
 console.log(formErrors.age)
 const onEmailChange  =(e) => {
  //trayendo  el valor de input
  const value = e.target.value
  //cree una variable que me da el error actual
  let error ="";
  //expesion para los email
const reExpEmail = /^\s+@\s+$/i
//estado del email
setEmail(value);
//validaciones 
    <div>
      <form>
        <div>
          <label>
            Email
            <input type="email" placeholder="Email" onchange={onEmailChange} />
          </label>
          <span className="error" role="alert">
            {formErrors.email}
            Test error
          </span>
        </div>
        <div>
          <label>
            Name
            <input type="text" placeholder="Name" value ={name}onchange = {onNameChange}/>
          </label>
          <span className="error" role="alert">{formErrors.name}</span>
        </div>
        <div>
          <label>
            Age
            <input type="number" placeholder="Age" value={age}onchange={onAgeCange}/>
          </label>
          <span className="error" role="alert"> {formErrors.age}</span>
        </div>
        <div>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            Password check
            <input type="password" placeholder="Password check" />
          </label>
          <span className="error" role="alert"></span>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
          </label>
          <span className="error" role="alert"></span>
        </div>

        <button disable={isvalid}>Sign up</button>
      </form>
    </div>
  };
}
