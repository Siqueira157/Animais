// src/components/AnimalList.js
import React from 'react';
 
const AnimalList = ({ animals, onRemove, onToggleStatus }) => {
  return (
    <div>
      <h2>Animais Lista</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id} style={{ backgroundColor: animal.status === 'Concluído' ? '#d3ffd3' : 'inherit' }}>
            <img src={animal.photo} alt="Animal" />
            <p>Raça: {animal.breed}</p>
            <p>Local: {animal.location}</p>
            <p>Tipo: {animal.type}</p>
            <p>Contato: {animal.phoneNumber}</p>
            <p>Status: {animal.status}</p>

            <button onClick={() => onRemove(animal.id)} className='remov'>Remover</button>
            <button onClick={() => onToggleStatus(animal.id)}>Concluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default AnimalList;