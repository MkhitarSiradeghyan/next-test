import s from '../styles/Tab.module.sass'
import TabItem from './TabItem'

const Tab = ({services}) => {
    return (
        <div className={s.tab}>
            <div className="container">
                <div className={s.wrap}>
                    {
                        services.map(e => <TabItem title={e.title} />)
                    }
                </div>
            </div>
        </div>
    )
}


export default Tab