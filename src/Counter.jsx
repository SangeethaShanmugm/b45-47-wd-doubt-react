import { useState, useEffect } from "react";
export default function Counter() {
  //js starts
  //   let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const [item, setItem] = useState(1);

  useEffect(() => {
    console.log("Like is updated", like);
  }, []);

  // console.log(like);
  //js ends
  //jsx starts
  return (
    <>
      <h1>Hello Everyone</h1>
      <button
        onClick={() => {
          setLike(like + 1);
          //   console.log(like);
        }}
      >
        👍 {like}
      </button>
      <button
        onClick={() => {
          setDisLike(dislike + 1);
          //   console.log(like);
        }}
      >
        👎 {dislike}
      </button>
    </>
  );
  //jsx ends
}

function Hello() {
  return <div>Hello </div>;
}

function Hello1() {
  return <div>Hello </div>;
}

// export { Counter, Hello, Hello1 }; //named export
