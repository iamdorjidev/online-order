import React from 'react'
import Button from './button/Button'
const Card = (props) => {
  return (
    <div>
        <main className="main bd-grid">
            <article className="card">
                <div className="card__img">
                    <img src={props.image} alt="" />
                </div>
                <div className="card__name">
                    <p>{props.name}</p>
                </div>
                <div className="card__precis">
                    <a href="" className="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>
                    
                    <div>
                        <span className="card__preci card__preci--before">${props.beforeprice}</span>
                        <span className="card__preci card__preci--now">${props.afterprice}</span>
                    </div>
                    <a href="" className="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                    <Button />
                </div>
            </article>
        </main>
    </div>
  )
}

export default Card
