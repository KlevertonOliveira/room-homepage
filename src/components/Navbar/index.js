import Link from 'next/link';
import styles from './Navbar.module.scss';

export function Navbar({isToggleActive, setIsToggleActive}){
  
  return(

    <article className={styles.navbar_wrapper}>
      <nav className={`${styles.navbar} ${isToggleActive? 
        (styles.navbar_menu_active) : (styles.navbar_menu_inactive)}`
      }>
   
        <div className={`${styles.navbar_content}`}>

          {/* Toggle Button */}
          <div
            className={styles.navbar_toggle_button}
            onClick={()=>setIsToggleActive(!isToggleActive)}>

            <button
              type='button'
              className={styles.navbar_button}
            >
              {isToggleActive?
                (<img src='/images/icon-close.svg' alt='close navbar menu'/>)
                :
                (<img src='/images/icon-hamburger.svg' alt='open navbar menu'/>)
              }          
            </button>
          </div>

          {/* Logo */}

          <div className={`${styles.navbar_main} ${styles.navbar_main_logo} 
          ${isToggleActive && (styles.hidden)}`}>
            
            <img src='/images/logo.svg' alt='Logo'/>      
          
          </div>

          {/* Links */}
          <div className={`${styles.navbar_main} ${styles.navbar_main_links}
           ${!isToggleActive && (styles.hidden)}`}>
            
            <ul className={styles.navbar_list}>
              <li className={styles.navbar_item}>
                <Link href='#'>
                  <a className={styles.navbar_link}>Home</a>
                </Link>
              </li>
              <li className={styles.navbar_item}>
                <Link href='#'>
                  <a className={styles.navbar_link}>Shop</a>
                </Link>
              </li>
              <li className={styles.navbar_item}>
                <Link href='#'>
                  <a className={styles.navbar_link}>About</a>
                </Link>
              </li>
              <li className={styles.navbar_item}>
                <Link href='#'>
                  <a className={styles.navbar_link}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>

        {/* End of Content Div */}
        </div> 
      </nav>
    </article>
  )
}