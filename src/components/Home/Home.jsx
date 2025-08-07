import React from 'react'
import avatar from '../../assets/images/avataaars.svg'
import styles from "./Home.module.css"

export default function Home() {
  return (
<div class={styles.bgHome}>
  <div className='contanier'></div>
    <img src={avatar} alt="notFond" className={styles.widthImg} />
      <h1 className='text-white mb-0 text-center  py-3'>start Framework</h1>
      <div className={styles.divider}>
      <div className={styles.line} />
    <i class={ ` ${ "fa-solid fa-star" }  ${ styles.star}  `}></i>
      <div className={styles.line} />
    </div>
<p className='text-white text-center mb-0 py-3'> Graphic Artist - Web Designer - Illustrator</p>
</div>

  )
}
