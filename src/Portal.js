import ReactDOM from "react-dom";

const container = document.getElementById("portal");

const Portal = ({ children }) => ReactDOM.createPortal(children, container);

export default Portal;
