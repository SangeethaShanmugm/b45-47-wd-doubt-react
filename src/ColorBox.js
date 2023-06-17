export function ColorBox({ cr }) {
  const styles = {
    backgroundColor: cr,
    height: "35px",
    width: "250px",
  };
  return <div style={styles}></div>;
}
