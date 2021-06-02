import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [userName, setUserName] = useState("")
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory()

  const getUserName = (event) => {
    event.preventDefault();
    const userInput = document.querySelector('#search-input').value
    setUserName(userInput) 
  }

  const submitHandle = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then((data) => {
       if (data.message === "Not Found") {
         setErrorMessage(` Usuário "${userName}" não encontrado`)
      } else {
        history.push(`/profile?userName=${userName}`)
      }
    })
  }

  return (
    <section className="home-container">
      <div className="search-card">
        <p className="search-title">Search Devs</p>
        <div className="input-container">
          <input
            id="search-input"
            className="search-input"
            type="text"
            placeholder="Type the username here..."
            onChange={getUserName}
          />
          <button className="search-button" onClick={submitHandle}>
            <i className="fas fa-search"></i>
            Buscar
          </button>
        </div>
        {errorMessage && (
          <div className="errorMessage">{errorMessage}</div>
        )}
      </div>
    </section>
  );
}
