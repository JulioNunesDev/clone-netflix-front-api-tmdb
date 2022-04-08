
import './MovieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
export const MovieRow = ({item}) => {


    const [scrollX, setScrollX]=useState(-400)

    const handleLeftArrow=()=>{
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }   

    const handleRightArrow=()=>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = item.items.results.length * 150
        if((window.innerWidth - listW) > x){
            x= (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }


    return ( 
       <div className='movieRow'>
            <h2>{item.title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}><NavigateBeforeIcon style={{fontSize: 50}}/></div>
            <div className="movieRow--right" onClick={handleRightArrow}><NavigateNextIcon style={{fontSize: 50}} /></div>
            <div className='movieRow--listarea'>
            <div className='movieRow--list' style={{marginLeft: scrollX,
            width: item.items.results.length * 200
            
            }}>

                {item.items.results.length > 0 && item.items.results.map((item, key)=>(
                    <div className="movie--item" key={key}>
                        <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.original_title} />
                    </div>
                    ))}
              </div>
          </div>
       </div>
     );
}
 
