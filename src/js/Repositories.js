import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [repo, setRepo] = useState([]);
  const [arrRepo, setArrRepo] = useState([])

  const useQuery = () => {
    return new URLSearchParams(document.location.search);
  };

  const getQuery = () => {
    let query = useQuery();
    // console.log(userName + "-> Este é o usuário procurado!");
    return query.get("userName");
  };

  const starOrdenation = (fristPosition, secondPosition) => {
    if (fristPosition.stargazers_count < secondPosition.stargazers_count)
      return -1;

    if (fristPosition.stargazers_count > secondPosition.stargazers_count)
      return 1;
  }

  useEffect(() => {
    setUserName(getQuery);

    if (!userName) {
      // console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");

      fetch(`https://api.github.com/users/${userName}/repos`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((repos) => {
            setRepo(
              repo.push({
                id: repos.id,
                html_url: repos.html_url,
                description: repos.description,
                name: repos.name,
                updated_at: repos.updated_at,
                stargazers_count: repos.stargazers_count,
              })
            );
          });
        })
        .then(() => setArrRepo(Array.from(repo).sort(starOrdenation).reverse()))
        
    }

    return 
  }, [userName]);

  return (
    <section className="profile-reporitories">
      <ul id="ul-container">
        { arrRepo.length === 0 ? 
        <li className="profile-reporitory-card">
          <p className="repository-name"> Nenhum repositório encontrado. </p>
          <p className="repository-description">Provavelmente o usuário não possui repositórios públicos ou você pesquisou pelo usuário errado.</p>
        </li> :
        arrRepo.map(iten => ( 
          <li key={iten.id} className="profile-reporitory-card">
            <a target="_blank" href={iten.html_url} className="repository-name">{iten.name}</a>
            <p className="repository-description">{iten.description}</p>
            <p className="repository-status">
              <i className="far fa-star"></i> {iten.stargazers_count} stars
              <i className="fas fa-circle"></i> Updated {/* {repo.updated} */}30
              days ago
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
