import s from '../styles/Button.module.sass'

const Button = (props) => {
  return (
    <button className={s.submit}>{props.title}</button>
  )
}

export default Button