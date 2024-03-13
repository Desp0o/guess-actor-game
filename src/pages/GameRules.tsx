import Policy from "../components/Policy";
import ToBackComp from "../components/toBack/ToBackComp";
import "./GameRules.css";

const GameRules = () => {
  return (
    <div className="how_to_play">
      <ToBackComp path="/" />

      <div className="game_rules">
      <p className="how_to_play_title">HOW TO PLAY</p>
      <p className="how_to_play_rules">
        When it comes to Australia, for example, websites are not allowed to
        misrepresent themselves. The information located on a site should not be
        deceptive or misleading in any way when talking about services or
        products. This is how a website can comply with consumer law in
        Australia.
      </p>

      </div>

      <div className="how_to_play_policy">
        <Policy />
      </div>
    </div>
  );
};

export default GameRules;
