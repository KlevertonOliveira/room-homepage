import Image from 'next/image';

import styles from './SlideButtons.module.scss';

export function SlideButtons({previousSlide, nextSlide}){
  
  return(
    
    <div className={styles.slides}>
      <button
        className={styles.slide_button}
        onClick={previousSlide}>
          <Image
            src='/images/icon-angle-left.svg'
            alt='Previous slide' 
            width='15'
            height='50'  
          />
      </button>

      <button
        className={styles.slide_button}
        onClick={nextSlide}>
        <Image
          src='/images/icon-angle-right.svg'
          alt='Next slide' 
          width='15'
          height='50'  
        />
      </button>
    </div>
  )
}