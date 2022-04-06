import s from '../styles/TabItem.module.sass'
import ActiveLink from './ActiveLink';

const TabItem = ({ title }) => {

  return (
    <div className={s.title}>
      <ActiveLink title={title} href={`/services/categories/${title}`}>
          {title}
      </ActiveLink>
    </div>
  )
}

export default TabItem