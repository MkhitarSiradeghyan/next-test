import { useState } from 'react'
import s from '../styles/Card.module.sass'
import Cart from './Cart'
import Modal from './Modal'

const Card = ({title, text, img, price}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const rooms = [
        {
            name: 'Risus, tortor',
            price: 10
        },
        {
            name: 'Sem id',
            price: 16
        },
        {
            name: 'Sem id',
            price: 8
        },
        {
            name: 'Eu molestie',
            price: 'Free'
        },
    ]
    const handleOpen = e => {
        e.target.id === 'modal' ||
        e.target.id === 'closeModal' ||
        e.target.id === 'addToCart' ? setIsModalOpen(!isModalOpen) : false
    }

    return (
        <>
        <div className={s.card}>
            <div className={s.image}>
                <img src={img} alt="" />
            </div>
            <div className={s.content}>
                <div className={s.info}>
                    <div className={s.title}>{title}</div>
                    <div className={s.text}>{text}</div>
                </div>
                <div className={s.info}>
                    <div className={s.price}><span>{price.toFixed(2)}</span><span>$</span></div>
                    <button onClick={handleOpen} id="addToCart" className={s.button}>Add To Cart</button>
                    <button onClick={handleOpen} id="addToCart" className={s.cart}>
                        <Cart/>
                    </button>
                </div>
            </div>
        </div>
        {
            isModalOpen && <Modal img={img} title={title} text={text} price={price} rooms={rooms} closeModal={handleOpen} />
        }
        </>
    )
}

export default Card