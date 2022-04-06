// import s from 'Home.module.sass'
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Services from '../components/Services';

const Index = () => {
  const state = useSelector(s => s)
  const categories = []
  for (const key in state) {
    categories.push(key)
  }
  return (
    <>
      <Header />
      <Search />
      {
          categories.map(c => {
            return <Services title={c}/>
          })
      }
    </>

  )
}


export default Index