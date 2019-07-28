import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { createGlobalStyle } from 'styled-components'
import Container, { Row } from './components/Grid'
import { stringify } from 'querystring'
import { createHash, timestamp } from './utils'
import { ICharacterDataWrapper, ICharacter } from './models/characters'
import { API_KEY, PRIVATE_KEY, API_URL } from './KEY'
import './App.css';
import CardHero from './components/CardHero';

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    color: #606c76;
    font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.6em;
    font-weight: 300;
    letter-spacing: .01em;
    line-height: 1.6;
  }
`

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

  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Row direction="row" wrap>
          {characters && characters.map((character: ICharacter) => <CardHero character={character} key={character.id} />)}
        </Row>
      </Container>
    </div>
  );
}

export default App;
