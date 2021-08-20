import { LoadingInterface } from '../interfaces/Props'
import { FC } from 'react'

/* Peticion que muestra al gato cargando */
const Loading : FC<LoadingInterface> = ( { isLoading, className = "loading-container" } ) => {

  return (
    <div>
      {isLoading ? (
        <div className={className}>
          <img
            alt="cat-image"
            src="cat-loading.png"
            className="isLoading"
            style={{ height: "50px", width: "50px" }}
          />
          <h1>Cargando...</h1>
        </div>
      ) : '' }
    </div>
  );
}

export default Loading;
