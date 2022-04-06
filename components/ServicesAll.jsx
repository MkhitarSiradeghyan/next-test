import s from '../styles/ServicesAll.module.sass'
import Service from './Service'
import { useSelector } from 'react-redux';

const ServicesAll = () => {
    const categories = useSelector(state => state.services)
    return (
        <div className={s.services}>
            <div className="container">
                <div className={s.wrap}>
                    {
                        categories.map(c => {
                            return <Service title={c.title} img={c.image} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default ServicesAll