import { SyntheticEvent, ChangeEvent, useEffect, useState } from "react";

const Singup = () => {
  const initialState = {
    id_usuario: 0,
    id_tipo_usuario: "",
    nombre: "",
    email: "",
    pass: "",
    usuarios: [],
    _id: "",
  };

  const [values, setValues] = useState(initialState);

  const addusuario = (e: SyntheticEvent) => {
    //console.log(this.state);
    fetch("/signup", {
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
        M.toast({ html: "Usuario Creado" });
        setValues({
          id_usuario: 0,
          id_tipo_usuario: "",
          nombre: "",
          email: "",
          pass: "",
          usuarios: [],
          _id: "",
        });
      })
      .catch((err) => console.error(err));
    e.preventDefault();
  };

  useEffect(() => console.log("Componetne Montado"));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s8">
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="input-field col s12">
                  <p>1: Para Usuario Administrador</p>
                  <p>2: Para Usuario Regular</p>
                </div>
              </div>
              <form onSubmit={addusuario}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="hidden"
                      name="id_usuario"
                      value={values.id_usuario || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="id_tipo_usuario"
                      onChange={handleChange}
                      type="text"
                      placeholder="Tipo_usuario"
                      value={values.id_tipo_usuario || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="nombre"
                      onChange={handleChange}
                      type="text"
                      placeholder="Nombre"
                      value={values.nombre || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="email"
                      onChange={handleChange}
                      type="text"
                      placeholder="Email"
                      value={values.email || ""}
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
                      value={values.pass || ""}
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

export default Singup;
