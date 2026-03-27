import { useState } from "react";

const mirrorMap = {
  0: 5,
  1: 6,
  2: 7,
  3: 8,
  4: 9,
  5: 0,
  6: 1,
  7: 2,
  8: 3,
  9: 4,
};

const getColor = (num) => {
  if ([1, 3, 7, 9].includes(num)) return "green";
  if ([2, 4, 6, 8].includes(num)) return "red";
  return "violet";
};

const getBigSmall = (num) => (num >= 5 ? "Big" : "Small");

// Build Markov transition table
const buildMarkovTable = (history) => {
  const table = {};

  for (let i = 0; i < history.length - 1; i++) {
    const current = history[i];
    const next = history[i + 1];

    if (!table[current]) {
      table[current] = {};
    }

    if (!table[current][next]) {
      table[current][next] = 0;
    }

    table[current][next]++;
  }

  return table;
};

// Predict using Markov Chain
const markovPredict = (history) => {
  if (history.length < 2) return null;

  const table = buildMarkovTable(history);
  const lastNumber = history[history.length - 1];

  if (!table[lastNumber]) {
    return mirrorMap[lastNumber];
  }

  const transitions = table[lastNumber];

  let maxCount = 0;
  let predicted = null;

  for (let num in transitions) {
    if (transitions[num] > maxCount) {
      maxCount = transitions[num];
      predicted = parseInt(num);
    }
  }

  return predicted;
};

export default function WingoMarkovPredictor() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    const nums = input
      .split("")
      .map((n) => parseInt(n.trim()))
      .filter((n) => !isNaN(n));

    if (nums.length < 5) {
      alert("Enter at least 5 numbers");
      return;
    }

    setHistory(nums);
    const next = markovPredict(nums);
    setPrediction(next);
  };

  return (
    <div style={styles.container}>
      <h2>WinGo Markov Predictor</h2>

      <input
        type="text"
        placeholder="Enter numbers e.g. 8,5,4,0,4,2,9"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />

      <button onClick={handlePredict} style={styles.button}>
        Predict
      </button>

      <div style={styles.row}>
        {history.map((num, i) => (
          <div key={i} style={{ ...styles.ball, background: getColor(num) }}>
            {num}
          </div>
        ))}
      </div>

      {prediction !== null && (
        <div style={styles.result}>
          <h3>Prediction</h3>
          <div
            style={{
              ...styles.ball,
              width: 80,
              height: 80,
              fontSize: 28,
              background: getColor(prediction),
            }}
          >
            {prediction}
          </div>

          <p>Color: {getColor(prediction)}</p>
          <p>Big/Small: {getBigSmall(prediction)}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: "Arial",
  },
  input: {
    padding: 10,
    width: 300,
    marginRight: 10,
  },
  button: {
    padding: 10,
    cursor: "pointer",
  },
  row: {
    display: "flex",
    gap: 10,
    marginTop: 20,
    flexWrap: "wrap",
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
  },
};
