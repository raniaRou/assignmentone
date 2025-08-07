import React from 'react'
import styles from './Portfolio.module.css'
import port1 from '../../assets/images/poert1.png'
import port2 from '../../assets/images/port2.png'
import port3 from '../../assets/images/port3.png'

export default function Portfolio() {
  return (
    <div>

<div className={styles.bgPortfolio}>
  <h1 className='text-black mb-0 text-center mt-5 text-uppercase bold' >portfolio component</h1>
             <div className={styles.dividerP}>
           <div className={styles.lineP} />
         <i class={ ` ${ "fa-solid fa-star" }  ${ styles.starP}  `}></i>
           <div className={styles.lineP} />
         </div>

<div className='container'>
  <div className='row gy-3'>
    <div className='col-md-4'>
<img src={port1} alt=''className={` ${'img-fluid rounded-2'} ${styles.hov} `} />
    </div>
        <div className='col-md-4'>
<img src={port2} alt=''className={` ${'img-fluid rounded-2'} ${styles.hov} `} />
    </div>
        <div className='col-md-4'>
<img src={port3} alt=''className={` ${'img-fluid rounded-2'} ${styles.hov} `} />
    </div>
            <div className='col-md-4'>
<img src={port1} alt=''className={` ${'img-fluid rounded-2'} ${styles.hov} `} />
    </div>
            <div className='col-md-4'>
<img src={port2} alt=''className={` ${'img-fluid rounded-2'} ${styles.hov} `} />
    </div>
            <div className='col-md-4'>
<img src={port3} alt=''className={` ${'img-fluid rounded-2'} ${styles.hov} `} />
    </div>

  </div>

</div>
    </div>
    </div>
  )
}
