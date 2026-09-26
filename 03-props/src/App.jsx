import React from 'react'
import Card from './components/Card'
import flowerImage from './flower.avif';

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} img={flowerImage}/>
      <Card user='Rupali' age={15} img={flowerImage}/>
      <Card user='Shahid' age={33} img="https://images.unsplash.com/photo-1790122387890-bb12da7bece2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='raj' age={23} img="https://images.unsplash.com/photo-1790000756672-0853f0624bee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App
