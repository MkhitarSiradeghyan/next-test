import s from '../styles/Service.module.sass'
import Link from 'next/link';

const Service = ({ title, img }) => {
    return (
        <Link href={`/services/categories/${title}`}>
            <a>
                <div className={s.service}>
                    <img src={img} alt="" />
                    <div className={s.title}>{title}</div>
                </div>
            </a>
        </Link>
    )
}


export default Service