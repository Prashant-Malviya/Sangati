import type { ChangeEvent } from 'react'

const Home = () => {

  const demo = (e : ChangeEvent<HTMLInputElement>)=>{
   const input = e.target
   if(input.files){
    console.log(input.files[0])
   }
  }
  return (
    <div>

      <button onChange={demo} className='bg-rose-600 px-6 py-2 rounded text-white'>Click here</button>

    </div>
  )
}

export default Home