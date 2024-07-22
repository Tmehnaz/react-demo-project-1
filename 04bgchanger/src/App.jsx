import { useState } from 'react'


function App() {
  const [color, setColor] = useState("grey")

  return (
    <div 
    className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button 
        onClick={()=>setColor('pink')}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{backgroundColor:'pink'}}> Pink </button>
        <button 
        onClick={()=>setColor('beige')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
        style={{backgroundColor:'beige'}}> Beige </button>
         <button 
        onClick={()=>setColor('rgb(10,186,181)')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
        style={{backgroundColor:'rgb(10,186,181)'}}> Tiffany </button>
        <button
        onClick={()=>setColor('#C8A2C8')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
        style={{backgroundColor:'#C8A2C8'}}> Lilac </button>
          <button
        onClick={()=>setColor('#D1BDA7')}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
        style={{backgroundColor:'#D1BDA7'}}> Vanilla </button>

      </div>

    </div>    
    </div>
  )
  
}

export default App
