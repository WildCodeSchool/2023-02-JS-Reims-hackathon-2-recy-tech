import { useState } from "react";
import "../App.css";

function Addphone() {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedRAM, setSelectedRAM] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [hasCharger, setHasCharger] = useState(false);
  const [comment, setComment] = useState("");
  const [antutuScore, setSelectedAntutuScore] = useState("");

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
  };

  return (
    <section className="form-container">
      <div className="form-title">
        <h2>Remplissez les champs ci-dessous pour évaluer le smartphone :</h2>
      </div>
      <form onSubmit={handleSubmit} className="form-list">
        <div className="form-row">
          <p>Marque : </p>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">-- Sélectionnez : --</option>
            <option value="Modèle 1">Iphone</option>
            <option value="Modèle 2">Samsung</option>
            <option value="Modèle 3">Huawei</option>
            <option value="Modèle 3">Sony</option>
          </select>
        </div>
        <div className="form-row">
          <p>Modèle : </p>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">-- Sélectionnez : --</option>
            <option value="Modèle 1">IphoneSE</option>
            <option value="Modèle 2">Iphone11</option>
            <option value="Modèle 3">Iphone XR</option>
            <option value="Modèle 3">Iphone X</option>
            <option value="Modèle 3">Galaxy S10</option>
            <option value="Modèle 3">Galaxy Note 10</option>
            <option value="Modèle 3">Galaxy Note 10</option>
          </select>
        </div>
        <div className="form-row">
          <p>Score Antutu </p>
          <input
            type="number"
            min="0"
            value={antutuScore}
            onChange={handleAntutuScoreChange}
          />
        </div>
        <div className="form-row">
          <p>Score Antutu </p>
          <input
            type="number"
            min="0"
            value={antutuScore}
            onChange={handleAntutuScoreChange}
          />
        </div>
        <div className="form-row">
          <p>RAM </p>
          <select value={selectedRAM} onChange={handleRAMChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="2 Go">2 Go</option>
            <option value="4 Go">4 Go</option>
            <option value="8 Go">8 Go</option>
            <option value="8 Go">16 Go</option>
            <option value="8 Go">32 Go</option>
          </select>
        </div>
        <div className="form-row">
          <p>Stockage :</p>
          <select value={selectedStorage} onChange={handleStorageChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="256 Go">16 Go</option>
            <option value="64 Go">64 Go</option>
            <option value="128 Go">128 Go</option>
            <option value="256 Go">256 Go</option>
            <option value="256 Go">512 Go</option>
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
            <option value="4G">Cable</option>
            <option value="5G">Charger</option>
            <option value="5G">Ecouter</option>
          </select>
        </div>
        <div className="form-row">
          <p>Commentaire </p>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        <div className="btn-form">
          <button type="submit" className="btn1">
            Suivant
          </button>
        </div>
      </form>
    </section>
  );
}

export default Addphone;
