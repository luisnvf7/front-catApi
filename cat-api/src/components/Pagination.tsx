import "../styles/pagination.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState, FC } from "react";
import { PaginationProp } from '../interfaces/Props'

const Pagination : FC<PaginationProp> = ( { pressPage } )  => {
  let history = useHistory();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    let value = new URLSearchParams(history?.location.search);
    //@ts-ignore
    setCurrentPage((+value?.get("page")) || 1);
  }, []);

  const onPress = (page : number) : void => {
    setCurrentPage(page)
    pressPage(page)
  }

/* Se hace paginacion de 5, ya que siempre seran 100 gastos segun la peticion al back */
  return (
    <div>
      <div className="pagination-container">
        {[...new Array(5)].map((_, i) => {
          return (
            <div
            title="div-button"
            onClick={() => onPress(i+1)}
            key={i}
              style={{
                fontSize: "30px",
                padding: "7px",
                backgroundColor: currentPage === (i + 1) ? "#3c79b9" : "white",
                color: currentPage === (i + 1) ? "white" : "black",
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
