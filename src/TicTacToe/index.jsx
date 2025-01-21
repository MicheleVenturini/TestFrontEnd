import { useState } from "react";

const Box = ({ value, onClick }) => {
  return (
    <div
      style={{
        height: 100,
        width: 100,
        border: "1px solid black",
        fontSize: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => onClick()}
    >
      {value}
    </div>
  );
};

const Row = ({ values, onClick }) => {
  return (
    <div style={{ display: "flex" }}>
      <Box
        value={values[0]}
        onClick={() => {
          onClick(0);
        }}
      />
      <Box
        value={values[1]}
        onClick={() => {
          onClick(1);
        }}
      />
      <Box
        value={values[2]}
        onClick={() => {
          onClick(2);
        }}
      />
    </div>
  );
};

export const TicTacToe = () => {
  const [win, setWin] = useState(false);
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isFirstPlayer, setFirstPlayer] = useState(true);

  const checkWin = (newCells) => {
    console.log(
      newCells[0] === newCells[1],
      newCells[1] === newCells[2],
      newCells[0] !== ""
    );
    if (
      newCells[0] === newCells[1] &&
      newCells[1] === newCells[2] &&
      newCells[0] !== ""
    ) {
      setWin(true);
    }
  };

  const onChangeCell = (row, column) => {
    if (!cells[row * 3 + column]) {
      const newArray = cells.map((v, i) => {
        if (i === row * 3 + column) {
          if (isFirstPlayer) {
            return "X";
          }

          return "O";
        }
        return v;
      });
      setCells(newArray);

      checkWin(newArray);

      setFirstPlayer(!isFirstPlayer);
    }
  };

  return (
    <div>
      <Row
        values={cells.slice(0, 3)}
        onClick={(v) => {
          onChangeCell(0, v);
        }}
      />
      <Row
        values={cells.slice(3, 6)}
        onClick={(v) => {
          onChangeCell(1, v);
        }}
      />
      <Row
        values={cells.slice(6, 9)}
        onClick={(v) => {
          onChangeCell(2, v);
        }}
      />
      {win && <p>Vittoria</p>}
    </div>
  );
};



    