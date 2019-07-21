import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { stringify } from 'querystring'
import { createHash, timestamp } from './utils'
import { ICharacterDataWrapper, ICharacter } from './models/characters'
import { API_KEY, PRIVATE_KEY, API_URL } from './KEY'
import './App.css';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<[ICharacter] | undefined>(undefined)

  const fetchCharacters = async () => {
    const ts = timestamp()
    const payload = {
      apikey: API_KEY,
      hash: createHash(ts, PRIVATE_KEY, API_KEY),
      ts
    }
    try {
      const { data }: {data: ICharacterDataWrapper} = await axios.get(`${API_URL}/characters?${stringify(payload)}`)

      setCharacters(data && data.data && data.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const getImage = (thumbnail: any) => `${thumbnail.path}.${thumbnail.extension}`

  return (
    <div className="App">
      {characters && characters.map((character: ICharacter) => <div key={character.id}>
        <div>{character.name}</div>
        <img src={getImage(character.thumbnail)} />
      </div>)}
    </div>
  );
}

export default App;
