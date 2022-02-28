import { useEffect, useState } from "react";
import { OrderWithDetails } from "../../libs/types/order";

const initialOrder: OrderWithDetails[] = [];

const Tickets = () => {

  const [orderWithDetails, setOrderWithDetails] = useState(initialOrder);


const fetcTickets = () => {
    fetch("http://localhost:4000/orders", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => setOrderWithDetails(data['data']))
      .catch((err) => console.error(err));
  }

  useEffect(fetcTickets, []);

  console.log(`this is a log of fetching tickets ${JSON.stringify(orderWithDetails)}`);

  return (
    <div className="col s12 m12 l12 xl12">
      <table>
        <thead>
          <tr>
            <th>Id User</th>
            <th>Type User</th>
            <th>Name</th>
            <th>Email</th>
            <th>Id Ticket</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
	  {orderWithDetails.map((order: OrderWithDetails) => {
            return (
              <tr key={order.orderId}>
                <td>{order.user.id_user}</td>
                <td>{order.user.id_type_user}</td>
                <td>{order.user.name}</td>
                <td>{order.user.email}</td>
                <td>{order.ticket.id_ticket}</td>
                <td>{order.ticket.name}</td>
                <td>{order.ticket.description}</td>
		<td>
		  <a className="waves-effect waves-light btn-small"><i className="material-icons right">edit</i>edit</a>
		  <a className="waves-effect waves-light btn-small"><i className="material-icons right">delete</i>delete</a>
                </td>
              </tr>
            );
	      })}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
