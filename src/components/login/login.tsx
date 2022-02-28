import { SyntheticEvent, ChangeEvent, useState, useEffect } from "react";

const Login = () => {
  const initialState = {
    email: "",
    pass: "",
  };

  const [values, setValues] = useState(initialState);

  const login = (e: SyntheticEvent) => {
    e.preventDefault();
    //console.log(this.state);
    fetch("/signin", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res, "prueba"))
      .then((data) => {
        console.log(data, "prueba2");
        M.toast({ html: "Welcome" });
        setValues({
          email: "",
          pass: "",
        });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => console.log("Componetne Montado"));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12 xl12">
          <div className="card">
            <div className="card-content">
              <form onSubmit={login}>
                <div className="row">
                  <div className="input-field col s12">
                    <h3>Login</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="email"
                      onChange={handleChange}
                      type="text"
                      placeholder="Email"
                      value={values.email}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="pass"
                      onChange={handleChange}
                      type="text"
                      placeholder="Password"
                      value={values.pass}
                    />
                  </div>
                </div>
                <button type="submit" className="btn light-blue darken-4">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
