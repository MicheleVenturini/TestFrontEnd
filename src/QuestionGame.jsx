import { useState } from 'react';

export const QuestionsGame = () => {
    const [step, setStep] = useState(0);
    const [wins, setWins] = useState(0);

    return (
        <>
            <h1>Questions Game</h1> 
            <p>Vittoria: {wins}</p>
            {step === 0 && 
            (
            <>
                <p>Quanto fa 2+2?</p>
                <button onClick={() => setStep(1)}>4</button>
                <button onClick={() => alert("Hai sbagliato")}>7</button>
            </>
            )}
            {step === 1 && 
            (
            <>
                <p>Qual è la capitale della Lettonia?</p>
                <button onClick={() => {alert("Hai sbagliato"); setStep(0)}}>Monaco</button>
                <button onClick={() => setStep(2)}>Riga</button>
            </>
            )}
            {step === 2 && 
            (
            <>
                <p>Quando è stata scoperta l'america?</p>
                <button onClick={() => {setStep(3); setWins(wins + 1)}}>1492</button>
                <button onClick={() => {alert("Hai sbagliato"); setStep(0)}}>1507</button>
            </>
            )}
            {step === 3 && 
            (
            <>
                <h2>Hai Vinto!</h2>
                <button onClick={() => setStep(0)}>Rigioca</button>
            </>
        )}
        </>
    );
}