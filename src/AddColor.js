import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  // const color = "lightblue";
  const [color, setColor] = useState("lightblue");

  //const colorList = ["red", "pink", "orange"];
  const [colorList, setColorList] = useState(["red", "pink", "orange"]);

  const Styles = {
    backgroundColor: color,
  };

  console.log(color);

  return (
    <div>
      <div>
        <input
          value={color}
          style={Styles}
          type="text"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        {/* copy colorList and add a new Color */}
        <button onClick={() => setColorList([...colorList, color])}>
          Add Color
        </button>
      </div>
      {colorList.map((clr, index) => (
        <ColorBox key={index} cr={clr} />
      ))}
    </div>
  );
}
