import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let name = input;
    if (/[a-z]/gi.test(name)) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${name.trim()}`)
        .then((result) => {
          setLoading(false);
          setCountries(result.data);
        })
        .catch((e) => {
          setLoading(false);
          setError(true);
        });
    } else {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((result) => {
          setLoading(false);
          setCountries(result.data);
        })
        .catch((e) => {
          setLoading(false);
          setError(true);
        });
    }
  }, [input]);

  window.addEventListener("resize", (w) => {
    let maindiv = document.getElementById("maindiv");

    if (w.target.innerWidth > 768) {
      maindiv.classList.add("d-flex");
      maindiv.classList.add("flex-wrap");
      maindiv.classList.add("justify-content-between");
    } else {
      maindiv.classList.remove("d-flex");
      maindiv.classList.remove("flex-wrap");
      maindiv.classList.remove("justify-content-between");
    }
  });

  return (
    <>
      <input
        type="text"
        placeholder="Filtre o seu País"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <div id="maindiv" className="d-flex flex-wrap justify-content-between">
        {countries &&
          !loading &&
          !error &&
          countries.map((countrie, index) => {
            return (
              <>
                <div
                  className="card"
                  style={{ width: "18rem" }}
                  id={`card-${index}`}
                >
                  <img
                    src={countrie.flag}
                    className="card-img-top"
                    alt="bandeira"
                    loading="lazy"
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{countrie.name}</h5>
                    <div className="card-text" style={{ textAlign: "left" }}>
                      Nome Nativo: {countrie.nativeName}
                      <br />
                      {countrie.capital && <>Capital: {countrie.capital}</>}
                      <br />
                      População: {countrie.population} habitantes
                      <br />
                      {countrie.altSpellings.length > 0 && (
                        <>Nomes Alternativos:</>
                      )}
                      <ul>
                        {countrie.altSpellings &&
                          countrie.altSpellings.map((alt, i) => {
                            if (alt.length <= 3) return <></>;
                            return (
                              <>
                                <li key={i}>{alt}</li>
                              </>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      {loading && (
        <>
          <br /> <br />
          <div
            className="spinner-border text-primary"
            style={{ fontSize: "50px", width: "50px", height: "50px" }}
            role="status"
          />
        </>
      )}
      {error && (
        <>
          <br />
          <div
            style={{ width: "50%", fontSize: "20px" }}
            class="alert alert-danger"
            role="alert"
          >
            Consulta Inválida...
          </div>
        </>
      )}
    </>
  );
}
