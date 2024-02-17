const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT";


export async function getPlayers() {
    try {
        const response = await fetch(`${API_URL}/players`);
        const result = await response.jason();
        return result.data.players;
    } catch (error) {
        console.error(error);
    }
}

export async function getPlayer(playerID) {
    try {
        const response = await fetch(`${API_URL}/players/${playerID}`);
        const result = await response.jason();
        return result.data.player;
    } catch (error) {
        console.error(error);
    }
}

export async function createPlayers(player) {
    try {
        const response = await fetch(`${API_URL}/players`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(player)
        });
        const result = await response.jason();
        return result.data.newPlayer;
    } catch (error) {
        console.error(error);
    }
}

export async function deletePlayer(playerID) {
    try {
        const response = await fetch(`${API_URL}/players/${playerID}`,{
        method: "DELETE",
        
    });
        await response.json();
        
    } catch (error) {
     console.error(error);
    }
}


export async function getTeams() {
    try {
        const response = await fetch(`${API_URL}/teams`);
        const result = await response.json();
        return result.data.teams;
    } catch (error) {
        console.error(error);
    }
}