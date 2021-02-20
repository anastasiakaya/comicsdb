import React from 'react';
import CharacterItem from '../character-item';

const CharacterPage = ({itemId}) => {
  return (
    <CharacterItem itemId={itemId} /> 
  );
};

export default CharacterPage;