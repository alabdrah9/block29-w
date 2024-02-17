import { useState, useEffect } from 'react';
import './App.css';
import {getPlayers, getPlayer, deletePlayer, createPlayers, } from "./api";
// import{ k }  from "vite/dist/node/types.d-jgA8ss1A.js"
import { Players } from './components/Players';
import { PlyersDetails} from './components/PlayerDetails'


function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] =useState({});
const [filter ,setFilter] = useState ("")


useEffect(()=> {
  getPlayers().then((players) =>{
  setPlayer(players);
});
}, []);
function handlePlayerClick(playerId){
getPlayer(playerId).then(setPlayer);
}
function handlePlayerDelete(playerId){
  deletePlayer(playerId).then(() => {
getPlayer().then(players =>
  setPlayer(players) 
  )
  });


  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const newPlayer = Object.fromEntries(formData.entries());
  createPlayers(newPlayer).then(()=> {
    getPlayers().then((players) =>{
      setPlayers(players);
    })
  })
  }
  function handleFilter(evt){
    setFilter(evt.target.value);
  }
  
  return (
    <div onClick={() => setPlayer({})}>
    <h1>Puppy Bowl</h1>
    <PlyerDetails player={player} />
    <form>
      <label htmlFor="name"></label>
      <input type="text" id="name" />
      <label htmlFor="breed"></label>
      <input type="text" id="breed" />
      <label htmlFor="status">Status</label>
      <input type="text" id="status" />
      <button type="submit"> Add Player</button>
    </form>
    <input type="text" name="filter" value={filter} onChange={handleFilter} />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {players.filter(player => player.toLowCase().name.includes(filter.toLowerCase())
        .map((player) =>{
          return(
            <player
             key={player.id} 
             player={player} 
             onClick={handlePlayerClick}
             onDelete={handlePlayerDelete}
             />
           );
            }
)};
      </tbody>
    </table>
  
    </div>
    );
}  
}

export default App;
