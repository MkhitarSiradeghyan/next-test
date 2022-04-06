import Link from 'next/link'
import { useSelector } from 'react-redux'
import s from '../styles/Services.module.sass'
import Service from './Service'
import Title from './Title'

const Services = ({ title }) => {
    const category = useSelector(s => s[title])
    return (
        <div className={s.services}>
            <div className="container">
                <div className={s.wrap}>
                    <Title title={title} />
                    <div className={s.carousel}>
                        {
                            category.map(c => {
                                return <Service title={c.title} img={c.image} />
                            })
                        }
                    </div>
                    <Link href="/services">
                        <a className={s.see}>See All</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Services