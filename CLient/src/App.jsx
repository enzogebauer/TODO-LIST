import { useEffect } from 'react'
import { ListHeader } from './components/ListHeader'
export function App() {


  useEffect(() => async function getData() {
    const userEmail = "Filipe.gebauer@hotmail.com"
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.error((error))
    }
  }, [])
  return (
    <section className='flex justify-center'>
      <div className=' bg-[#f2f2f2] shadow-lg w-[800px] p-[10px] mt-[50px] rounded-xl
    ' >
        <ListHeader listName={"🎮  Games to master"} />
      </div>
    </section>

  )
}


