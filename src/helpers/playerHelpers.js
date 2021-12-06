
export const  preparePlayerData = (playerData) => {
  return Object.values(playerData);

}

export const addWinsToPlayers  = (playerDataArray, MatchData) => {
  return playerDataArray.map(player => {
    const currentWins = MatchData.reduce((acc, match) => {
      if (match.winner === player.gamerTag) {
        return acc += 1;
      } else {
        return acc;
      }
    }, 0);

    player.wins = currentWins;
    return player;
  });  
}