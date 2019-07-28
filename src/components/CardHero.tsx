import React from 'react'
import { ICharacter } from "../models/characters";
import { Column } from "./Grid";
import { CardContainer, CardImage, CardBody } from "./Card";
import { getImage } from "../utils"

const CardHero = ({ character }: { character: ICharacter }) => (
  <Column key={character.id} column={33.33}>
    <CardContainer>
      <CardImage imageUrl={getImage(character.thumbnail)} />
      <CardBody>
        <div>
          {character.name}
        </div>
        <div style={{
          height: 50,
          overflow: 'hidden'
        }}>
          {character.description ? character.description : 'No Description.'}
        </div>
        <div>
          {character.comics.available}
        </div>
      </CardBody>
    </CardContainer>
  </Column>
)

export default CardHero
