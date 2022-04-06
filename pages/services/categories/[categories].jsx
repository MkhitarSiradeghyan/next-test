import s from '../../../styles/Categories.module.sass'
import Tab from '../../../components/Tab';
import Category from './../../../components/Category';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';


const Categories = () => {
    const services = useSelector(s => s.services)

    return (
        <div className={s.categories}>
            <div className={s.services}>
                <Tab services={services} />
            </div>
            <div className={s.category}>
                {
                    services.map(e => <Category title={e.title} content={e.content} />)
                }
            </div>
        </div>
    )
}


export default Categories