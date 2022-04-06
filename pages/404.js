import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import s from '../styles/ErrorPage.module.sass'

const ErrorPage = () => {
    const router = useRouter()
    const [sec, setSec] = useState(5)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            router.back()
        }, 5000)
    })
    setTimeout(() => setSec(sec - 1), 1000)
    console.log(router)
    return (
        <div className={s.errorPage}>
            <div className={s.error}>404 | Page Not Found</div>
            <div className={s.back}>You will be redirected back in {sec} seconds</div>
        </div>
    )
}

export default ErrorPage