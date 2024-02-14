import { useState, useEffect } from 'react';
import './App.css';
import {gtePlayers, gtePlayer, deletePlaye, createPlayers} from "./api";
// import{ k }  from "vite/dist/node/types.d-jgA8ss1A.js"
import { Playe} from './components/Players';
import { PlyersDetails} from './components/PlayerDetails'


function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] =useState({});
useEffect(()=> {
  gtePlayers().then((players) =>{
  setPlayer(players);
});
}, []);
function handlePlayerClick(playerId){
gtePlayer(playerId).then(setPlayer);
}
function handlePlayerDelete(playerId){
  deletePlayer(playerId).then(() => {
gtePlayer().then(players =>
  setPlayer(players) 
  )
  });
  function handleSubmit(evt){
    evt.preventDefault();
    console.log(evt.target);
    const formData = new FormData(evt.target);
    console.log(formData);
  }
  }

  
  return (
    <div onClick={() => setPlayer({})}>
    <h1>Puppy Bowl</h1>
    <PlyersDetails player={player} />
    <form>
      <label htmlFor="name"></label>
      <input type="text" id="name" />
      <label htmlFor="breed"></label>
      <input type="text" id="breed" />
      <button type="submit"> Add Player</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) =>{
          return(
            <player
             key={player.id} 
             player={player} 
             onClick={handlePlayerClick}
             onDelete={handlePlayerDelete}
             />
          );
          })}   
      </tbody>
    </table>
  
    </div>
    );
}  


export default App
