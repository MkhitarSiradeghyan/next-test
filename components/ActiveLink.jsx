import { useRouter } from "next/dist/client/router"
import s from '../styles/ActiveLink.module.sass'

const ActiveLink = ({children, href, title}) => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }
  return (
      <a href={href} onClick={handleClick} className={`${s.link} ${router.asPath === href ? s.active : ''}`}>
          {children}
      </a>
  )
}

export default ActiveLink