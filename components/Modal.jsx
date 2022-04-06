import s from '../styles/Modal.module.sass'
import { toUp } from '../utils/toUpperCase'
import Option from './Option'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'
import { useState } from 'react'

const Modal = ({ title, text, img, price, closeModal, rooms }) => {
    const [quantity, setQuantity] = useState(0)
    return (
        <div onClick={closeModal} id="modal" className={s.modal}>
            <div className={s.inner}>
                <div id="closeModal" className={s.close} >
                    <svg class={s.svg} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" x2="20" y1="0" y2="20" stroke='#000' strokeWidth="1" />
                        <line x1="20" x2="0" y1="0" y2="20" stroke='#000' strokeWidth="1" />
                    </svg>
                </div>
                <div className={s.header}>
                    <div className={s.img}>
                        <img src={img} alt="" />
                    </div>
                    <div className={s.info}>
                        <div className={s.price}>{price}.00$</div>
                        <div className={s.title}>{toUp(title)}</div>
                    </div>
                </div>
                <div className={s.text}>{toUp(text)}</div>
                <div className={s.options}>
                    {
                        rooms.map(e => {
                            return <Option name={e.name} price={e.price} />
                        })
                    }
                </div>
                <div className={s.param}>
                    <div className={s.paramName}>Quantity</div>
                    <div className={s.paramValue}>
                        <button className={s.btn} onClick={() => quantity > 0 ? setQuantity(--quantity) : false}><img src={minus.src} alt="" /></button>
                        <div className={s.num}>{quantity}</div>
                        <button className={s.btn} onClick={() => quantity >= 0 ? setQuantity(++quantity) : false}><img src={plus.src} alt="" /></button>
                    </div>
                </div>
                <div className={s.modalAdd}>
                    <button>
                        <div className={s.modalText}>Add To Cart</div>
                        <div className={s.modalPrice}>{price.toFixed(2)}$</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal