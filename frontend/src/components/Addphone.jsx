import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

function Addphone() {
  const [selectedMarque, setSelectedMarque] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedRAM, setSelectedRAM] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [hasCharger, setHasCharger] = useState(false);
  const [comment, setComment] = useState("");
  const [antutuScore, setSelectedAntutuScore] = useState("");

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:6000"}/models`
    )
      .then((response) => response.json())
      .then((data) => setModels(data));
  }, []);

  const handleMarqueChange = (event) => {
    setSelectedMarque(event.target.value);
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleRAMChange = (event) => {
    setSelectedRAM(event.target.value);
  };

  const handleStorageChange = (event) => {
    setSelectedStorage(event.target.value);
  };

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
  };

  const handleChargerChange = (event) => {
    setHasCharger(event.target.checked);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAntutuScoreChange = (event) => {
    setSelectedAntutuScore(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSelectedModel("");
    setSelectedRAM("");
    setSelectedStorage("");
    setSelectedNetwork("");
    setHasCharger(false);
    setComment("");
    setSelectedMarque("");
  };

  return (
    <section className="form-container">
      <div className="form-title">
        <h2>Remplissez les champs ci-dessous pour évaluer le smartphone :</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-list">
        <div className="form-row">
          <p>Marque : </p>
          <select value={selectedMarque} onChange={handleMarqueChange}>
            <option value="">-- Sélectionnez : --</option>
            {models.map((model) => (
              <option value={model.marque}>{model.marque}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <p>Modèle : </p>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">-- Sélectionnez : --</option>
            {models
              .filter((model) => model.marque === selectedMarque)
              .map((model) => (
                <option value={model.name}>{model.name}</option>
              ))}
          </select>
        </div>
        <div className="form-row">
          <p>Score Antutu </p>
          <input
            type="number"
            min="0"
            value={antutuScore}
            onChange={handleAntutuScoreChange}
            className="antutu"
          />
        </div>
        <div className="form-row">
          <p>RAM </p>
          <select value={selectedRAM} onChange={handleRAMChange}>
            <option value="">-- Sélectionnez --</option>
            {models.map((model) => (
              <option value={model.ram}>{model.ram}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <p>Stockage :</p>
          <select value={selectedStorage} onChange={handleStorageChange}>
            <option value="">-- Sélectionnez --</option>
            {models.map((model) => (
              <option value={model.storage}>{model.storage}</option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <p>Réseau :</p>
          <select value={selectedNetwork} onChange={handleNetworkChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="4G">3G</option>
            <option value="4G">4G</option>
            <option value="5G">5G</option>
          </select>
        </div>
        <div className="form-row">
          <p>Accesoires :</p>
          <select value={hasCharger} onChange={handleChargerChange}>
            <option value="">-- Sélectionnez --</option>
            <option>Cable+ chargeur</option>
            <option>sans Accesoires</option>
          </select>
        </div>
        <div className="form-row">
          <p>Commentaire </p>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        <div className="btn-form">
          <Link to="resultat" className="btn1">
            Validation
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Addphone;
