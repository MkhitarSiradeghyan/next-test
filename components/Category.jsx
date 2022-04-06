import s from '../styles/Category.module.sass'
import Card from './Card'
import Title from './Title'

const Category = ({ content, title }) => {

    return (
        <div className={s.category}>
            <div className="container">
                <div className={s.wrap}>
                    <Title title={title} id={title}/>
                    <div className={s.cards}>
                        {
                            content.map(e => {
                                return <Card title={e.name} id={e.id} img={e.image} text={e.text} price={e.price} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Category