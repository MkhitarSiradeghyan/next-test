import s from '../styles/Search.module.sass'
import calendar from '../assets/icons/calendar.svg'
import minus from '../assets/icons/minus.svg'
import plus from '../assets/icons/plus.svg'
import Button from './Button'
import { useState } from 'react'

const Search = () => {
    const [rooms, setRooms] = useState(0)
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)

    return (
        <div className={s.search}>
            <div className="container">
                <div className={s.wrap}>
                    <div className={s.dateParams}>
                        <div className={s.date}>
                            <span className={s.title}>Check In</span>
                            <label htmlFor="in">21.02.2022</label>
                            <input type="date" id="in" />
                        </div>
                        <div className={s.date}>
                            <span className={s.title}>Check Out</span>
                            <label htmlFor="out">dd.mm.yyyy</label>
                            <input type="date" id="out" />
                        </div>
                        <div className={s.calendar}>
                            <div className={s.dateIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="18" height="20" viewBox="0 0 24 24">
                                    <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <span className={s.vr}></span>
                    <div className={s.params}>
                        <div className={s.param}>
                            <span className={s.title}>Rooms</span>
                            <div className={s.count}>
                                <button className={s.btn} onClick={() => rooms > 0 ? setRooms(--rooms) : false}><img src={minus.src} alt="" /></button>
                                <div className={s.num}>{rooms}</div>
                                <button className={s.btn} onClick={() => rooms >= 0 ? setRooms(++rooms) : false}><img src={plus.src} alt="" /></button>
                            </div>
                        </div>

                        <div className={s.param}>
                            <span className={s.title}>Adults</span>
                            <div className={s.count}>
                                <button className={s.btn} onClick={() => adults > 0 ? setAdults(--adults) : false}><img src={minus.src} alt="" /></button>
                                <div className={s.num}>{adults}</div>
                                <button className={s.btn} onClick={() => adults >= 0 ? setAdults(++adults) : false}><img src={plus.src} alt="" /></button>
                            </div>
                        </div>

                        <div className={s.param}>
                            <span className={s.title}>Children</span>
                            <div className={s.count}>
                                <button className={s.btn} onClick={() => children > 0 ? setChildren(--children) : false}><img src={minus.src} alt="" /></button>
                                <div className={s.num}>{children}</div>
                                <button className={s.btn} onClick={() => children >= 0 ? setChildren(++children) : false}><img src={plus.src} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <span className={s.vr}></span>

                    <div className={s.params}>
                        <Button title="Check Availability" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search