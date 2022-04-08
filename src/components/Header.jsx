

import './Header.css'

export const Header = ({black}) => {
    return ( 

        <header className={black ? 'black' : ''}>
           <div className="header--logo">
               <a href="/">
                   <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-2-1.png" alt="Netflix" />
               </a>
           </div>
           <div className="header--user">
               <a href="">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario" />
               </a>
           </div>
        </header>
     );
}
 