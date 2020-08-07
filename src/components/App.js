import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import getApiData from '../services/AppAPI';
import Header from './Header'
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('Rick');


  useEffect(
    () => {
      getApiData().then(data => {
        setCharacters(data);
      });
    }, []);

  const handleFilters = data => {
    if (data.key === 'filterName') {
      setFilterName(data.value);
    }
  }

  const renderCharacterDetail = props => {
    const routeCharacterId = props.match.params.id;
    const character = characters.find(character => character.id == routeCharacterId);
    if (character) {
      return (
        < CharacterDetail
          image={character.image}
          name={character.name}
          species={character.species}
          planet={character.origin.name}
          episode={character.episode}
          status={character.status}
        />
      );
    } else {
      return <p className="Alert">Personaje no encontrado</p>
    }
  };


  const renderFilteredCharacters = () => {
    return characters.filter(character => {
      return character.name.includes(filterName);
    });
  }


  return (
    <div className="App " >
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            filterName={filterName}
            handleFilters={handleFilters} />
          <CharacterList characters={renderFilteredCharacters()} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </div >
  );
}


export default App;



