import MarginWrapper from "../../layouts/MarginWrapper";

export default function Footer() {
  const styleFooter = {
    backgroundColor: "black",
    color: "white",
    height: "50px",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <div style={styleFooter}>
      <MarginWrapper>
        develop with 💔 by <b>jomblo</b>
      </MarginWrapper>
    </div>
  );
}
