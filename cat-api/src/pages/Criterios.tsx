import { ChangeEvent, useEffect, useState, FC } from "react";
import axios from "axios";
import {
  CategoriesResponse,
  BodyStructure,
  Cat,
} from "../interfaces/CatInterface";
import HeaderTabs from "../components/HeaderTabs";
import "../styles/catspage.css";
import Loading from "../components/Loading";
import { FilterInterface } from "../interfaces/FilterInterface";
import { environment } from "../environment/environment.dev";
import "../styles/select.css"
import Dropdown from "../components/Dropdown";

/* Page de criterios */
const CriteriosPage: FC = () => {
  const [breeds, setBreeds] = useState<BodyStructure[]>([]);

  const [categories, setCategories] = useState<BodyStructure[]>([]);

  const [filterValues, setFilterValues] = useState<FilterInterface>({
    order: "",
    breed: "",
    category: "",
  });

  const [orderBy, setOrderBy] = useState<BodyStructure[]>([
    {
      id: "desc",
      name: "Desc",
    },
    {
      id: "asc",
      name: "Asc",
    },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [cats, setCats] = useState<Cat[]>([]);

  const getCriterios = async (): Promise<void> => {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);
    let categories_reponse = await axios.get<CategoriesResponse>(
      `${environment.server}/categories`,
      config
    );
    console.log(categories_reponse);
    setIsLoading(false);
    setBreeds(categories_reponse.data.breeds);
    setCategories(categories_reponse.data.categories);
    setFilterValues({
      order: orderBy[0].id,
      category: categories_reponse.data.categories[0].id,
      breed: categories_reponse.data.breeds[0].id,
    });
  };

  const onSelectOrder = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFilterValues((prevState) => ({
      ...prevState,
      order: event.target.value,
    }));
  };

  const onSelectBreed = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFilterValues((prevState) => ({
      ...prevState,
      breed: event.target.value,
    }));
  };

  const onSelectCategory = (event: ChangeEvent<HTMLSelectElement>): void => {
    setFilterValues((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const onSendData = async (): Promise<void> => {
    setIsLoading(true);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    let filter_cats = await axios.get<Cat[]>(
      `${environment.server}/filtercats?${Object.keys(filterValues)
        //@ts-ignore
        .map((key) => `${key}=${filterValues[key]}`)
        .join("&")}`,
      config
    );

    setIsLoading(false);
    setCats(filter_cats.data);
  };

  useEffect(() => {
    getCriterios();
  }, []);

  return (
    <div>
      <HeaderTabs left="Gatos" right="Criterios" />

      <div>
        <div style={{ padding: "30px 80px" }}>
          <div className="filters-container">
              <Dropdown label='Ordenar' onSelect={onSelectOrder} disabled={isLoading} values={orderBy}  />

              <Dropdown label="Razas" onSelect={onSelectBreed} disabled={isLoading} values={breeds} />

              <Dropdown label="Categoria" onSelect={onSelectCategory} disabled={isLoading} values={categories} />
          </div>

          <div style={{ marginTop: "20px" }} className="button-filter">
            <button disabled={isLoading} onClick={() => onSendData()}>Buscar</button>
          </div>
        </div>

        {isLoading ? (
          <Loading
            isLoading={isLoading}
            className="loading-container-category"
          />
        ) : (
          <div className="cat-grid">
            {cats.map((cat, i) => (
              <img
                key={i}
                src={cat.url}
                style={{ height: "300px", width: "370px" }}
                onClick={() => window.open(cat.url, "_blank")}
              ></img>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CriteriosPage;
