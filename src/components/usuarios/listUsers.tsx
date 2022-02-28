import { useState, useEffect } from "react";
import { User } from "../../libs/types/user";

const initialUser: User[] = [];

const ListUsers = () => {
  const [userWithDetails, setUserWithDetails] = useState(initialUser);

  const fetchUsers = () => {
    fetch("http://localhost:4000/users", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => setUserWithDetails(data["data"]))
      .catch((err) => console.error(err));
  };

  useEffect(fetchUsers, []);

  console.log(
    `this is a log of fetching tickets ${JSON.stringify(userWithDetails)}`
  );

  return (
    <div className="col s12">
      <table>
        <thead>
          <tr>
            <th>id_usuario</th>
            <th>id_tipo_usuario</th>
            <th>nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userWithDetails.map((usuarios) => {
            return (
              <tr key={usuarios.id_user}>
                <td>{usuarios.id_user}</td>
                <td>{usuarios.id_type_user}</td>
                <td>{usuarios.name}</td>
                <td>{usuarios.email}</td>
                <td>
                  <a className="waves-effect waves-light btn-small">
                    <i className="material-icons right">edit</i>edit
                  </a>
                  <a className="waves-effect waves-light btn-small">
                    <i className="material-icons right">delete</i>delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
