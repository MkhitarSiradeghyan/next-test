import s from '../styles/Option.module.sass'

const Option = ({name, price}) => {
    const date = 'i' + Date.now()
    return (
        <div className={s.option}>
            <div className={s.check}>
                <label>
                    <input type="checkbox" id={date} />
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.49999 8.47498L1.60833 5.58331C1.28333 5.25831 0.758325 5.25831 0.433325 5.58331C0.108325 5.90831 0.108325 6.43331 0.433325 6.75831L3.91666 10.2416C4.24166 10.5666 4.76666 10.5666 5.09166 10.2416L13.9083 1.42498C14.2333 1.09998 14.2333 0.574976 13.9083 0.249976C13.5833 -0.0750244 13.0583 -0.0750244 12.7333 0.249976L4.49999 8.47498Z" fill="#090076" />
                    </svg>

                </label>
            </div>
            <div className={s.name}><label htmlFor={date}>{name}</label></div>
            <div className={s.price}>{price === 'Free' ? "Free" : price.toFixed(2) + '$'}</div>
        </div>
    )
}

export default Option