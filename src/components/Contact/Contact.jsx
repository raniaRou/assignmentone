import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.bgContact}>
        <h1 className='text-black  text-center  mt-5 text-uppercase bold' >conatct section</h1>
             <div className={styles.dividerC}>
           <div className={styles.lineC} />
         <i class={ ` ${ "fa-solid fa-star" }  ${ styles.starC}  `}></i>
           <div className={styles.lineC} />
         </div>

           <form className='container my-5 '>
    <input type="text" placeholder="userName" className='form-control mb-5 border-0 border-bottom'  />
    <input type="number" placeholder="userAge" className='form-control mb-5 border-0 border-bottom' />
    <input type="email" placeholder="userEmail" className='form-control mb-5 border-0 border-bottom' />
    <input type="password" placeholder="userPassword" className='form-control mb-5 border-0 border-bottom' />
    <button type="submit" className='btn btn-success'>send Message</button>
  </form>
    </div>
  )
}
