import React from 'react'
import Section1 from './componets/section1/Section1'
import Section2 from './componets/section2/Section2'
const App = () => {
// props drilling in child to child component
  const user = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Social media has become an important part of our daily lives. It helps us connect with people, share our ideas, and stay updated with the latest news and trends.',
      color:'bg-purple-600',
      tag: 'satisfied'
    },
    {img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'It also provides a great platform for learning and discovering new opportunities. People can share their skills, build their personal brand, and connect with others from different parts of the world.',
      color:'bg-olive-600',
      tag: 'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1622151834625-66296f9f0e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'However, social media should be used wisely. Spending too much time on it can affect our productivity and mental well-being, so maintaining a healthy balance is important.',
      color:'bg-yellow-600',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'However, social media should be used wisely. Spending too much time on it can affect our productivity and mental well-being, so maintaining a healthy balance is important.',
      color:'bg-blue-600',
      tag:'Adventure'
    },
    {
      img:'https://images.unsplash.com/photo-1601933513556-7926c45d1c49?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQzfHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'However, social media should be used wisely. Spending too much time on it can affect our productivity and mental well-being, so maintaining a healthy balance is important.',
      color:'bg-green-600',
      tag:'wellDefined'
    },
    {
      img:'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYyfHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'However, social media should be used wisely. Spending too much time on it can affect our productivity and mental well-being, so maintaining a healthy balance is important.',
      color:'bg-red-600',
      tag:'passionate'
    }
   
  ]
  return (
    <div>
      <Section1  user={user}/>
      <Section2 />
    </div>
  )
}

export default App
