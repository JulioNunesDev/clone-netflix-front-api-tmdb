import { useEffect, useState } from 'react'

import './App.css'

import { MovieRow } from './components/MovieRow'
import { Header } from './components/Header'
import { FeaturedMovie } from './components/FeaturedMovie'
import tmdb from './tmdb'



function App() {

  const [movieList, setMovieList]=useState([])
  const [FeaturedData, setFeaturedData]=useState(null)
  const [blackHeader, setBlackHeader]=useState(null)

    useEffect(()=>{
      const loadAll = async ()=>{
        let list = await tmdb.getHomeList()
        setMovieList(list)

        let originais = list.filter(i=>i.slug === 'originals')
        let randoChoosen = Math.floor(Math.random() * (originais[0].items.results.length - 1))
        let choosen = originais[0].items.results[randoChoosen]

        let choosenInfo = await tmdb.getMovieInfo(choosen.id,'tv')

       setFeaturedData(choosenInfo)
     

      }

      loadAll()
    },[])

    useEffect(()=>{
      const scrollListener =()=>{
        if(window.scrollY > 10){
          setBlackHeader(true)
        }else{
          setBlackHeader(false)
        }
      }
      window.addEventListener('scroll', scrollListener)

      return ()=>{
        window.removeEventListener('scroll', scrollListener)
      }
    },[])




  return (
    <div className="page">

      <Header black={blackHeader}/>

     {FeaturedData && 
      <FeaturedMovie item={FeaturedData}/>
     }
    <section className='lists'>
      {movieList.map((item, key)=>(
        <MovieRow key={key} item={item} />
      ))}
    </section>
    {movieList <= 0 &&
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
      </div>
      }
    <footer>
      Feito com <span role='img' aria-label='coração'>💖</span> pela B7Web<br/>
        Direitos de imagem para NetFlix<br/>
        Ddos pegos do site Themoviedb.org
    </footer>
    
    </div>
  )
}

export default App
