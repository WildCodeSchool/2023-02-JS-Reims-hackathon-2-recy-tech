import { useState } from "react";
import "../App.css";

function Addphone() {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedRAM, setSelectedRAM] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [hasCharger, setHasCharger] = useState(false);
  const [comment, setComment] = useState("");

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
    <div className="form-container">
      <h2>Ajouter un téléphone</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <p>Modèle </p>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="Modèle 1">Modèle 1</option>
            <option value="Modèle 2">Modèle 2</option>
            <option value="Modèle 3">Modèle 3</option>
          </select>
        </div>
        <div className="form-row">
          <p>RAM </p>
          <select value={selectedRAM} onChange={handleRAMChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="2 Go">2 Go</option>
            <option value="4 Go">4 Go</option>
            <option value="8 Go">8 Go</option>
          </select>
        </div>
        <div className="form-row">
          <p>Stockage </p>
          <select value={selectedStorage} onChange={handleStorageChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="64 Go">64 Go</option>
            <option value="128 Go">128 Go</option>
            <option value="256 Go">256 Go</option>
          </select>
        </div>
        <div className="form-row">
          <p>Réseau </p>
          <select value={selectedNetwork} onChange={handleNetworkChange}>
            <option value="">-- Sélectionnez --</option>
            <option value="4G">4G</option>
            <option value="5G">5G</option>
          </select>
        </div>
        <div className="form-row">
          <p>Chargeur </p>
          <input
            type="checkbox"
            checked={hasCharger}
            onChange={handleChargerChange}
          />
        </div>
        <div className="form-row">
          <p>Commentaire </p>
          <textarea value={comment} onChange={handleCommentChange} />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Addphone;
