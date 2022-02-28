import { SyntheticEvent, ChangeEvent, useState, useEffect } from "react";

const Usuarios = () => {
  const initialState = {
    id_usuario: 0,
    id_tipo_usuario: "",
    nombre: "",
    email: "",
    pass: "",
    _id: "",
  };

  const initialUser = {
    usuarios: [],
  };

  const [state, setState] = useState(initialState);

  const [usuarios, setUsuarios] = useState(initialUser);

  const addusuario = (e: SyntheticEvent) => {
    //console.log(this.state);
    if (state.id_usuario) {
      fetch(`/usuario/${state.id_usuario}`, {
        method: "PUT",
        body: JSON.stringify(state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Usuario Actualizado" });
          setState({
            id_usuario: 0,
            id_tipo_usuario: "",
            nombre: "",
            email: "",
            pass: "",
            _id: "",
          });
          fetchusuario();
        })
        .catch((err) => console.error(err));
    } else {
      fetch("addusuario", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => console.log(res))
        .then((data) => {
          console.log(data);
          M.toast({ html: "Usuario Creado" });
          setState({
            id_usuario: 0,
            id_tipo_usuario: "",
            nombre: "",
            email: "",
            pass: "",
            _id: "",
          });
          fetchusuario();
        })
        .catch((err) => console.error(err));
    }
    e.preventDefault();
  };

  useEffect(() => {
    console.log("Componetne Montado");
    fetchusuario();
  });


  const fetchusuario = () => {
    console.log("Fetch usuarios");
  };

  const editusuario = (id_usuario:any) => {
    console.log('editusuario')
  };

  const delusuario = (id_usuario:any) => {
    if (true) {
      fetch(`/usuario/${id_usuario}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          M.toast({ html: "Ususairo eliminado" });
          fetchusuario();
        })
        .catch((err) => console.error(err));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="container">
      <div className="row">
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
        <div className="col s7">
          <table>
            <thead>
              <tr>
                <th>id_usuario</th>
                <th>id_tipo_usuario</th>
                <th>nombre</th>
                <th>email</th>
                <th>pass</th>
              </tr>
            </thead>
            <tbody>
              {initialUser.usuarios.map((usuarios) => {
                return (
                  <tr key={usuarios}>
                    <td>{usuarios}</td>
                    <td>{usuarios}</td>
                    <td>{usuarios}</td>
                    <td>{usuarios}</td>
                    <td>{usuarios}</td>
                    <td>
                      <button
                        className="btn light-blue darken-4"
                        style={{ margin: "4px" }}
                        onClick={() => editusuario(usuarios)}
                      >
                        <i className="material-icons">edit</i>
                      </button>
                      <button
                        className="btn light-blue darken-4"
                        style={{ margin: "4px" }}
                        onClick={() => delusuario(usuarios)}
                      >
                        <i className="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
