import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
	  <a href="/" className="brand-logo">
            SmartTickets
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
	      <a href="/signup">Signup</a>
            </li>
            <li>
	      <a href="/tickets">Tickets</a>
            </li>
            <li>
	      <a href="/usuarios">Usuarios</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
