import React, { useState, useEffect } from "react";
import userImage from "../assets/image-profile.jpg";
import Repositories from "./Repositories";
import { Link } from "react-router-dom";


export default function Profile() {
  const [userName, setUserName] = useState("");
  const [amountStar, setAmountStar] = useState(0);
  // const [isValid, setIsValid] = useState(false);
  const [user, setUser] = useState({
    id: "id",
    login: "@username",
    avatar: userImage,
    bio: "Biografia do Usuário",
    name: "Nome do usuário",
    company: "Empresa",
    blog: "Blog",
    location: "Localização",
    email: "email@usuario.com",
    followers: "Seguidores",
    following: "Seguindo",
    twitter: "Usuário do Twitter",
    stars: "0",
  });

  const useQuery = () => {
    return new URLSearchParams(document.location.search);
  };

  const getQuery = () => {
    let query = useQuery();
    // console.log(userName + "-> Este é o usuário procurado!");
    return query.get("userName");
  };
  
  useEffect(() => {
    setUserName(getQuery);

    if (!userName) {
      // console.log("carregando...");
    } else {
      // console.log(userName + " Carregou!");
      // setIsValid(true);

      fetch(`https://api.github.com/users/${userName}/starred`)
        .then((res) => res.json())
        .then((data) => {
          const star = data.length;
          setAmountStar(star);
        });

      fetch(`https://api.github.com/users/${userName}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUser({
            id: data.id,
            login: data.login,
            avatar: data.avatar_url,
            bio: data.bio,
            name: data.name,
            company: data.company,
            blog: data.blog,
            location: data.location,
            email: data.email,
            followers: data.followers,
            following: data.following,
            twitter: data.twitter_username,
            repos: data.public_repos,
            stars: "0",
          });
        });
    }
  }, [userName]);

  return (
    <div className="profile-container">
      <section className="profile-navbar">
        {/* <button onClick={getQuery}>Mostra @username</button> */}
        <img className="user-img" src={user.avatar} alt="User" />
        <section className="profile-data">
          <p className="user-name">{user.name}</p>
          <p className="user-username">@{user.login}</p>
          <p className="user-bio">{user.bio}</p>
          <section className="user-ranks">
            <div className="user-ranks-followers">
              <i className="fas fa-users"></i>
              {user.followers} followers
            </div>
            <div className="user-ranks-following">
              <i className="far fa-heart"></i>
              {user.following} following
            </div>
            <div className="user-ranks-stars">
              <i className="far fa-star"></i>
              {amountStar} stars
            </div>
          </section>
          <section className="user-information">
            <div className="user-information-organization">
              <i className="far fa-building"></i>{user.company}
            </div>
            <div className="user-information-location">
              <i className="fas fa-map-marker-alt"></i>{user.location}
            </div>
            <div className="user-information-email">
              <i className="far fa-envelope"></i>{user.email}
            </div>
            <div className="user-information-website">
              <i className="fas fa-link"></i><a target="_blank" href={user.blog}>{user.blog}</a>
            </div>
            <div className="user-information-twitter">
              <i className="fab fa-twitter"></i><a target="_blank" href={`https://www.twitter.com/${user.twitter}`}>@{user.twitter}</a>
            </div>
          </section>
        </section>
        <Link to="/" className="back-button">
          Voltar
        </Link>
      </section>
      <Repositories/>
    </div>
  );
}
