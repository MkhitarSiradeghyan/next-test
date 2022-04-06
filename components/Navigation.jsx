import s from '../styles/Navigation.module.sass'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import logo from '../assets/img/logo.svg'
import Cart from './Cart'
import { useRef, useState } from 'react'

const Navigation = () => {
    const input = useRef(null)
    const { pathname } = useRouter()
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = () => {
        setIsChecked(!isChecked)
    }
    const handleClick = () => {
        input.current.click()
    }
    return (
        <div className={s.navigation}>
            <div className="container">
                <div className={s.wrap}>
                    <input ref={input} type="checkbox" id="burger" onChange={handleChange} defaultChecked={isChecked} />
                    <label htmlFor="burger" className={s.burger}>
                        <div className={`${s.t} ${s.line}`}></div>
                        <div className={`${s.m} ${s.line}`}></div>
                        <div className={`${s.b} ${s.line}`}></div>
                    </label>
                    <div className={s.bg}></div>
                    <label htmlFor='burger' className={s.fake}></label>
                    <div className={s.logo}>
                        <img src={logo.src} alt="Logo" />
                    </div>
                    <ul className={s.navlinks} >
                        <li onClick={handleClick} className={`${s.navlink} ${pathname === '/' ? s.active : ''}`}><Link href={'/'}><a>Home</a></Link></li>
                        <li onClick={handleClick} className={`${s.navlink} ${pathname.includes('/gallery') ? s.active : ''}`}><Link href={'/gallery'}><a>Gallery</a></Link></li>
                        <li onClick={handleClick} className={`${s.navlink} ${pathname.includes('/services') ? s.active : ''}`}><Link href={'/services'}><a>Services</a></Link></li>
                        <li onClick={handleClick} className={`${s.navlink} ${pathname.includes('/rooms') ? s.active : ''}`}><Link href={'/rooms'}><a>Rooms</a></Link></li>
                        <li onClick={handleClick} className={s.navlink}><Link href={'/cart'}><a>Cart <span className={s.navCart}>· {11}</span></a></Link></li>
                    </ul>
                    <div className={s.cart}>
                        <div className={s.cartIcon}>
                            <Cart />
                        </div>
                        <div className={s.cartTitle}>Cart</div>
                    </div>
                    <div className={s.lang}>EN</div>
                </div>
            </div>
        </div>
    )
}

export default Navigation