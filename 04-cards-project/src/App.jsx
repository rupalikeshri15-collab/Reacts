import React from 'react'
import Card from './components/card'
import User from './components/User'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_logo.svg?width=200",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Meta_Platforms_Inc._logo.svg?width=200",
    name: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_Logo.svg?width=200",
    name: "Apple",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Netflix_logo.svg?width=200",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA_logo.svg?width=200",
    name: "NVIDIA",
    datePosted: "10 days ago",
    post: "Python Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/IBM_logo.svg?width=200",
    name: "IBM",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Oracle_logo.svg?width=200",
    name: "Oracle",
    datePosted: "6 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$41/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://commons.wikimedia.org/wiki/Special:FilePath/Salesforce.com_logo.svg?width=200",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Software Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Gurugram, India"
  } 
  ];
  console.log(jobOpenings);  

  return ( 
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        
       return <div key={idx}>
       <Card company={elem.name} post ={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location={elem.location} datePosted={elem.datePosted}/>
      </div>
    })}
    </div>
  )
}

export default App