import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={`${styles.bgAbout} `}>
<div className='contanier d-flex justify-content-center align-items-center'>
<div className=''>
<div>     
   <h1 className='text-white mb-0 text-center py-5 text-uppercase'>about component</h1>
         <div className={styles.dividerA}>
         <div className={styles.lineA} />
       <i class={ ` ${ "fa-solid fa-star" }  ${ styles.starA}  ` }></i>
         <div className={styles.lineA} />
       </div></div>
<div className={styles.contanierAbout}>
         <div className='row justify-content-center align-items-center'>
      <div className='col-md-6 ps-5 w-50'>
         <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className='col-md-6 pe-5 w-50'>
                <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    </div>
</div>
</div>
    </div>
  )
}
