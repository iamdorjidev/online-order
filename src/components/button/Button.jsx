import React from 'react'
import style from './Button.module.css'
const Button = () => {
  function btnClick(){
    console.log('clicked btn')
  }
  return (
    <div>
      
      <button type="submit" className={style.button} onClick={btnClick}>
        Add to cart
      </button>
    </div>
  )
}

export default Button
