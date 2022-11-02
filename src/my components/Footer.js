import React from "react";

export const Footer = () => {
  let footerstyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  };
  return (
    <footer className="text-light bg-dark m-3 py-2 " style={footerstyle}>
      <p className="text-center">Copyright & copy : Rashedrion@gmail.com</p>
    </footer>
  );
};
