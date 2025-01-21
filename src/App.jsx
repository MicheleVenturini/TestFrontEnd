import "./App.css";
import { useState } from "react";
import { Counter } from "./counter";
import { TitleSubTitle } from "./titleSubTitle";
import { Typography } from "./Typography";
import { QuestionsGame } from "./QuestionGame";
import { ProfileCard } from "./ProfileCard";
import jobImage from './img/job.jpg';
import { Game } from "./Rock Paper Scissors Game";
import { TodoItem, TodoList } from "./ToDoList";
import  "./ToDoList/index.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    /*<>
      <TitleSubTitle title={"Titolo"} subtitle={"sottotitolo"}></TitleSubTitle>
      <TitleSubTitle title={"Titolo ebbasta solo un personaggio, che posso dire, non so rappare"}></TitleSubTitle>
      <Typography>Sono un Typography</Typography>

      <TitleSubTitle title={"Esercizio"} subtitle={"Sono un sottotitolo con più di 10 caratteri"}></TitleSubTitle>
      <p className="classTest">Questo è un paragrafo</p>
    </>*/

    /*<>
      <Counter counter={counter} setCounter={() => setCounter(counter + 1)}/>
      <Counter counter={counter*2} setCounter={() => setCounter(counter + 2)}/>
    </>*/

    // <>
    //   <QuestionsGame></QuestionsGame>
    // </>
    // <>
    // <Game>

    // </Game>
    // </>
    <>
    <TodoList>
      <TodoItem>

      </TodoItem>
    </TodoList>
    </>
  );
};

export default App;
