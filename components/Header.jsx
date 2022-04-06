import s from '../styles/Header.module.sass'
import bg from '../assets/img/1.png'

const Header = () => {

    return (
        <div className={s.header}>
            <div className="container">
                <div class={s.slider}>
                    <img src={bg.src} alt="bg" />
                </div>

            </div>
        </div>
    )
}

export default Header