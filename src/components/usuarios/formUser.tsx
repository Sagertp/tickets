import { ChangeEvent, useState } from "react";

const Usuarios = () => {
  const initialState = {
    id_usuario: 0,
    id_tipo_usuario: "",
    nombre: "",
    email: "",
    pass: "",
    _id: "",
  };

  const [state, setState] = useState(initialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const addusuario = () => console.log("addusuario");
  return (
        <div className="col s5">
          <div className="card">
            <div className="card-content">
              <form onSubmit={addusuario}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="hidden"
                      name="id_usuario"
                      value={state.id_usuario || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  w{" "}
                  <div className="input-field col s12">
                    <input
                      name="id_tipo_usuario"
                      onChange={handleChange}
                      type="text"
                      placeholder="id_tipo_usuario"
                      value={state.id_tipo_usuario || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="nombre"
                      onChange={handleChange}
                      type="text"
                      placeholder="nombre"
                      value={state.nombre || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="email"
                      onChange={handleChange}
                      type="text"
                      placeholder="email"
                      value={state.email || ""}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      name="pass"
                      onChange={handleChange}
                      type="text"
                      placeholder="pass"
                      value={state.pass || ""}
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
  );
};

export default Usuarios;
