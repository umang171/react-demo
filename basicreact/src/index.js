import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const customElement=React.createElement('a',
  {href:'https:google.com',target:'_blank'},'Click me here')

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
