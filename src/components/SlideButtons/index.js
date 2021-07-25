import styles from './SlideButtons.module.scss';

export function SlideButtons({previousSlide, nextSlide}){
  
  return(
    
    <div className={styles.slides}>
      <button
        className={styles.slide_button}
        onClick={previousSlide}>
          <img
            src='/images/icon-angle-left.svg'
            alt='Previous slide' />
      </button>

      <button
        className={styles.slide_button}
        onClick={nextSlide}>
        <img
          src='/images/icon-angle-right.svg'
          alt='Next slide' />
      </button>
    </div>
  )
}