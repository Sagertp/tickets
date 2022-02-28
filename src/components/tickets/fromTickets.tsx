import { SyntheticEvent, ChangeEvent, useState, useEffect } from "react";
import { Ticket } from "../../libs/types/ticket";

const FormTickets = () => {
  const initialState: Ticket = {
    id_ticket: 0,
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="col s5">
      <div className="card">
        <div className="card-content">
          <form onSubmit={() => console.log("Submit ticket")}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="hidden"
                  name="id_ticket"
                  value={values.id_ticket || ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  placeholder="name"
                  value={values.id_ticket || ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="description"
                  onChange={handleChange}
                  type="text"
                  placeholder="description"
                  value={values.name || ""}
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

export default FormTickets;
