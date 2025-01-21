import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard';
import avatar1 from './img/job.jpg';
import avatar2 from './img/avatar.jpg'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px'
  },
  playersContainer: {
    display: 'flex',
    gap: '30px',
    marginBottom: '20px'
  },
  gameResult: {
    textAlign: 'center'
  },
  choices: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    marginBottom: '15px'
  },
  choice: {
    textAlign: 'center'
  },
  choiceLabel: {
    fontWeight: '500',
    marginBottom: '5px',
    color: '#333'
  },
  winnerText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '15px'
  },
  button: {
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

const choices = ['carta', 'sasso', 'forbice'];

const getWinner = (player1Choice, player2Choice) => {
  if (player1Choice === player2Choice) return 'pareggio';
  
  if (
    (player1Choice === 'carta' && player2Choice === 'sasso') ||
    (player1Choice === 'sasso' && player2Choice === 'forbice') ||
    (player1Choice === 'forbice' && player2Choice === 'carta')
  ) {
    return 'player1';
  }
  
  return 'player2';
};

export const Game = () => {
  const [gameState, setGameState] = useState({
    player1Choice: null,
    player2Choice: null,
    winner: null,
    gameStarted: false
  });

  const startNewGame = () => {
    const player1Choice = choices[Math.floor(Math.random() * choices.length)];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];
    const winner = getWinner(player1Choice, player2Choice);
    
    setGameState({
      player1Choice,
      player2Choice,
      winner,
      gameStarted: true
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Carta, Sasso, Forbice</h1>
      
      <div style={styles.playersContainer}>
        <ProfileCard
          name="Giocatore 1"
          job="Idraulico"
          image={avatar1}
          checked={gameState.gameStarted && gameState.winner === 'player1'}
        />
        <ProfileCard
          name="Giocatore 2"
          job="Camionista"
          image={avatar2}
          checked={gameState.gameStarted && gameState.winner === 'player2'}
        />
      </div>

      {gameState.gameStarted && (
        <div style={styles.gameResult}>
          <div style={styles.choices}>
            <div style={styles.choice}>
              <p style={styles.choiceLabel}>Giocatore 1</p>
              <p>{gameState.player1Choice}</p>
            </div>
            <div style={styles.choice}>
              <p style={styles.choiceLabel}>Giocatore 2</p>
              <p>{gameState.player2Choice}</p>
            </div>
          </div>
          
          <p style={styles.winnerText}>
            {gameState.winner === 'pareggio' 
              ? 'Pareggio!' 
              : `Ha vinto ${gameState.winner === 'player1' ? 'Giocatore 1' : 'Giocatore 2'}!`}
          </p>
        </div>
      )}

      <button 
        onClick={startNewGame}
        style={styles.button}
      >
        Nuova Partita
      </button>
    </div>
  );
};

