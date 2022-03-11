import React from "react"
import "./style.css"
import Star from "./Star"

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })

  function toggleStar() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  return (
    <main>
      <div className="card">
        <img src="../images/user.png" className="card--image"/>
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleStar}/>
          <h2 className="card--name" >
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </div>
    </main>
  )
}
