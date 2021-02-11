import ReactDOM from "react-dom";
import React from "react";
import Game from "../src/componets/Game/Game";
import bunny from "../src/assets/images/bunny.png";
import hound from "../src/assets/images/hound.png";
import raccoon from "../src/assets/images/raccoon.png";
import squirrel from "../src/assets/images/squirrel.png";
export default function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoon,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrel,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunny,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: hound,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
