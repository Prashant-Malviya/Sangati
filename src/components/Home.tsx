import { useRef } from 'react'

const Home = () => {

  const demo = (e : MouseEvent<HTMLButtonElement>)=>{
   const button = e.currentTarget
   button.style.color = "pink"
  }
  return (
    <div>

      <button onClick={demo} className='bg-rose-600 px-6 py-2 rounded text-white'>Click here</button>

    </div>
  )
}

export default Home