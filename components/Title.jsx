import s from '../styles/Title.module.sass'

const Title = ({title}) => {
  return (
    <div className={s.title} id={title}>{title}</div>
  )
}

export default Title