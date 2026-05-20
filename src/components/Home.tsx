import { useRef } from 'react'

const Home = () => {

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const demo = ()=>{
   if(buttonRef.current){
    const button = buttonRef.current
    button.style.color = "yellow"
    button.style.backgroundColor = "blue"
   }
  }
  return (
    <div>

      <button ref={buttonRef} onClick={demo} className='bg-rose-600 px-6 py-2 rounded text-white'>Click here</button>

    </div>
  )
}

export default Home