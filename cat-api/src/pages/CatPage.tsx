import { useEffect, useState, FC } from "react";
import axios from "axios";
import { Cat } from "../interfaces/CatInterface";
import HeaderTabs from "../components/HeaderTabs";
import "../styles/catspage.css";
import Pagination from "../components/Pagination";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

import { environment } from '../environment/environment.dev'

/* Page que lista los gatos. */
const CatPage: FC = () => {
  let history = useHistory();

  const [cats, setCats] = useState<Cat[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const _getCats = async () : Promise<void> => {
    let value = new URLSearchParams(history.location.search);

    if (!!!value?.get("page")) {
      history.push("/cat?page=1");
    }

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);
    try {
      let cats_response = await axios.get<Cat[]>(
        //@ts-ignore
        `${environment.server}/cats?page=${+value?.get("page") || 1}`,
        config
      );
      window.scrollTo(0, 0);
      setIsLoading(false);
      setCats(cats_response.data);
    } catch (err) {
      window.location.assign(`${environment.server}/auth`);
    }
  };

  const pressPage = async (page: number) : Promise<void> => {
    history.push(`/cat?page=${page}`);
    _getCats();
  };

  const onLogout = async () : Promise<void> => {
    let logout = await axios.get(`${environment.server}/logout`);
    if (logout.data.isSucces) {
      Cookies.remove("token");
      history.push("/");
    }
  };

  useEffect(() => {
    _getCats();
  }, []);

  return (
    <div>
      <HeaderTabs left="Gatos" right="Criterios" />
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="cats-content">
          <Fab
            mainButtonStyles={{ backgroundColor: "#3c79b9" }}
            icon={<FontAwesomeIcon icon={faArrowCircleLeft} />}
            onClick={onLogout}
          />

          {cats.map((cat, i) => (
            <img
              key={i}
              src={cat.url}
              style={{ height: "300px", width: "300px" }}
              onClick={() => window.open(cat.url, "_blank")}
            ></img>
          ))}
        </div>
      )}
      <Pagination pressPage={pressPage} />
    </div>
  );
};

export default CatPage;
