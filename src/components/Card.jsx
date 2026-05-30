import React from 'react'

const Card = (props) => {
  return (
    <div>
        <main class="main bd-grid">
            <article class="card">
                <div class="card__img">
                    <img src={props.image} alt="" />
                </div>
                <div class="card__name">
                    <p>{props.name}</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>
                    
                    <div>
                        <span class="card__preci card__preci--before">${props.beforeprice}</span>
                        <span class="card__preci card__preci--now">${props.afterprice}</span>
                    </div>
                    <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                </div>
            </article>
        </main>
    </div>
  )
}

export default Card
