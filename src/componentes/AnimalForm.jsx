// src/components/AnimalForm.js
import React, { useState } from 'react';

const AnimalForm = ({ onAnimalSubmit }) => {
  const [photo, setPhoto] = useState('');
  const [breed, setBreed] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Perdido');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onAnimalSubmit({ photo, breed, location, type, phoneNumber });
    setPhoto('');
    setBreed('');
    setLocation('');
    setType('Perdido');
    setPhoneNumber('');
  };

  return (
    <form>
      <label>Foto:</label>
      <input type="file" accept="image/*" onChange={handlePhotoChange} id="fileInput" />
      <label htmlFor="fileInput" className="custom-file-upload">Escolher Arquivo</label>
 
      {photo && <img src={photo} alt="Animal" style={{ maxWidth: '100px', height: 'auto' }} />}
 
      <label>Raça:</label>
      <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
 
      <label>Local Encontrado/Perdido:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
 
      <label>Tipo:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Perdido">Perdido</option>
        <option value="Encontrado">Resgatado</option>
      </select>

      <label>Número de Telefone:</label>
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};

export default AnimalForm;
