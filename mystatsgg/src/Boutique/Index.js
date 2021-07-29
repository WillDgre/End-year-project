
import React, { useState, useEffect } from "react";
import {BoutiqueCard} from './BoutiqueCard';
import NavComp from '../components/NavComp'
import {Filter} from './BoutiqueFilter'
import { BoutiqueWrapper, BoutiqueBg } from "./BoutiqueElement";
import bg from '../icons/fond.png'
import Axios from "axios";

const Boutique = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1)

  const getGames = () => {
    Axios.defaults.headers.common["API"] = localStorage.getItem('token');
    Axios.get(`http://localhost:8080/games/page=${page}`)
      .then(res => {
          setGames(res.data.success)
          setPage(page + 1)
      })
  }

  useEffect(() => {
    getGames()
  }, [])


  function handleScroll(event) {
    const target = event.target
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      getGames(page)
    }
  }

  return (
     <>
     <div style={{backgroundImage: `url(${bg})`, width: '100%', height: '100%'}}>
     <NavComp/>
     {/* <Filter/> */}
      <BoutiqueBg onScroll= {(event) => handleScroll(event)}>
      
        {games
          // .filter((game) => game.title.toLowerCase().search(query.toLowerCase()) !== -1)
          .map((game) => (
            <BoutiqueCard
              img={game.imglink}
              title={game.name}
              price={game.price}
              discount={game.promo}
              link={game.link}
              key={game.id}
            />
          ))}
      </BoutiqueBg>
      </div>
    </>
   );
  };

  export default Boutique;