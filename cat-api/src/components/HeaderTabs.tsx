import "../styles/header.css";
import { useHistory } from "react-router-dom";
import { FC } from 'react'
import { HeaderProp } from "../interfaces/Props";

/* Componente de los tabs */
const HeaderTabs : FC<HeaderProp> = ({ left, right }) => {
  let history = useHistory();

  return (
    <div>
      <div className="tab-container">
        <div
          style={{ width: "100%", textAlign: "center" }}
          onClick={() => history.push("/cat?page=1")}
        >
          <div
            className="cat-tab"
            style={{
              height: "99%",
              borderBottomWidth: "5px",
              borderBottomColor:
                history?.location.pathname === "/cat" ? "red" : "",
            }}
          >
            <h1 className="rotate">{left}</h1>
            <img
              src="cat.jpg"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
        </div>
        <div
          style={{ width: "100%", textAlign: "center" }}
          onClick={() => history.push("/criterio")}
        >
          <div
            className="cat-tab"
            style={{
              height: "99%",
              borderBottomWidth: "5px",
              borderBottomColor:
                history?.location.pathname === "/criterio" ? "red" : "",
            }}
          >
            <h1>{right}</h1>
            <img
              src="cat2.png"
              style={{ height: "75px", width: "115px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTabs;
