

export default function Player({player, onClick ,handlePlayerClick}){
    return(
 
<tr key={player.id}>
  <td>{player.name}</td>
  <td>{player.breed}</td>
  <td>{player.Action}</td>
  <td>
    <button onClick={handlePlayerClick(player.id)}> View Player</button>
    <button onClick={handlePlayerClick(player.id)}> Delete Player</button>
    
  </td>
</tr>

    );
}