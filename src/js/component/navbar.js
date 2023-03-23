import React from "react";


import { useContext } from "react";

import { Context } from "../store/appContext";

import { Link } from "react-router-dom";


import starWars from "../../img/starwars.png";
import laserX from "../../img/laserX.png";




export const Navbar = () => {

  const { store, actions } = useContext(Context);

  
  return (
    <nav className="navbar navbar-light bg-white mb-3">
      <div id="iconoHome" className="ml-auto">
        <Link to="/">
          <img id="logo" src={starWars} />
        </Link>
      </div>

      <div className="ml-auto me-5">
        <div className="btn-group">
          <button
            type="button"
            id="butonFav"
            className="btn btn-primary dropdown-toggle fw-bold fs-5"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites <span id="favIcon" className="fa-layers fa-fw"> 
                          <i className="fa-regular fa-heart fa-2x"></i>
                          <span className="fa-layers-text fa-inverse">{store.favorites.length}</span>
                      </span>            
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {(store.favorites.length === 0) 
                ? <li className="dropdown-item d-flex justify-content-center"> (Empty) </li> 
                : store.favorites.map((item, index) => {
                  return (
                          <li key={index} className="dropdown-item d-flex justify-content-between">
    
                            {(item.description === "A person within the Star Wars universe") 
                              ? <span id="textoFavorito"><Link to={"/detailsPeople/" + item.id}> {item.name} </Link> </span> 
                              : (item.description === "A planet.") ? <span id="textoFavorito"><Link to={"/detailsPlanets/" + item.id}> {item.name} </Link> </span>
                              : (item.description === "A vehicle") ? <span id="textoFavorito"><Link to={"/detailsVehicles/" + item.id}> {item.name} </Link> </span>
                              : null
                            }
                            
                            <button id="botonesDelete" type="button" onClick={() => actions.deleteFavorites(index)} className="btn btn-outline-danger ms-2"> <img className="iconoDelete" src={laserX} /> </button>
                          </li>
                        );
                  })
            }   
          </ul>
        </div>
      </div>
    </nav>
  );
};


{/* <ul className="dropdown-menu" style={{ height: 'auto', width:'220px'}}>
{props.favoritos.map((element,index)=>{
return(
  <>
  <div className="text-wrap row mt-1">
  <div className="col-8"><li>{element}</li></div>
  <div className="col-4"><button type="button" onClick={()=>props.borrar(index)} className="btn btn-outline-danger btn-sm"> 🗑️ </button></div>
  </div>
  </>	
)})
}
</ul> */}

{/* <span className="trashIcon"><i className="fa-regular fa-heart">{store.favorites.length}</i></span>
data-fa-transform="shrink-8 down-3"
<i className="fa-solid fa-trash"></i>*/}