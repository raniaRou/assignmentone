import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <>
   <div className={styles.footer}>
  <div className="container text-center">
    <div className="row text-white">
      <div className="col-md-4">
        <h3 className="bold text-white ">LOCATION</h3>
        <p className='text-white'>
          2215 John Daniel Drive
        </p>
        <p className='text-white'> 
          Clark, MO 65243
        </p>
      </div>
      <div className="col-md-4 text-white" >
        <h3>AROUND THE WEB</h3>
        <div className="d-flex gap- justify-content-center algin align-items-center  ">
<div className={styles.icon}>
  <i className={ `${"fa-brands fa-facebook "} ${styles.icons}`}  />
  <i className={ ` ${"fa-brands fa-twitter"} ${styles.icons} `} />
  <i className={ ` ${"fa-brands fa-linkedin-in"} ${styles.icons}`} />
  <i className={`${"fa-solid fa-globe"} ${styles.icons}`} />
</div>

        </div>
      </div>
      <div className='col-md-4'>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
  
    </div>
  </div>
</div>
        <div className={styles.font}>
<p >Copyright © Your Website 2021</p>
      </div>
</>
  )
}
