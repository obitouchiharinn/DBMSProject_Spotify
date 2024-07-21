import React from 'react'
import '../../App.scss'
import {Link} from 'react-router-dom'
import search from '../../LoginAssets/search.svg'
import sp from '../../LoginAssets/spot.svg'
import burger from '../../LoginAssets/burger.svg'


const Nav1 = () => {
  return (
    <div>
       <nav>
      <img src={sp} className='sp' />
      <img class="burger" src={burger} />
      <div class="dropdown">
        <img class="search" src={search} />
        <input className='inpu' type="text" placeholder="Try logo, poster, anything!" />
        <div class="menu">
          <div class="menu-content">
            <button>
             <img src="video.svg" />
             <span>
              Video
             </span>
             <span>1920 / 1080 px</span>
            </button>
            <button>
              <img src="facebook.svg" />
              <span>
               Facebook Post (Landscape)
              </span>
              <span>1920 / 1080 px</span>
             </button>
             <button>
              <img src="instagram.svg" />
              <span>
               Instagram Post (Square)
              </span>
              <span>1940 / 788 px</span>
             </button>
          </div>
        </div>
      </div>
      <div class="anc">
        <a href="" id="link">Home</a>
       <Link to={'/artistid'}> <a href="" id="link">Artist</a></Link>
       <Link to={'/dashboard'}><a href="" id="link">Track</a></Link>
       <Link to={'/album'}> <a href="" id="link">Album</a></Link>
      </div>
    </nav>
    </div>
  )
}

export default Nav1
