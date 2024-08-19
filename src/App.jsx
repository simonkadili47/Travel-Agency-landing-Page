import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Heroarea from './Components/HeroArea/Heroarea'
import About from './Components/About/About'
import Destination from './Components/Destination/Destination'
import ChooseUs from './Components/ChooseUs/ChooseUs'
import VideoPreview from './Components/VideoPreview/VideoPreview'
import ContactUs from './Components/ContactUs/ContactUs'
import Blog from './Components/Blog/Blog'
import Sponsor from './Components/Sponsor/Sponsor'


function App() {
  return (
    <div>
      <Navbar/>
      <Heroarea/>
      <About/>
      <Destination/>
      <ChooseUs/>
      <VideoPreview/>
      <ContactUs/>
      <Blog/>
      <Sponsor/>
    </div>
  )
}

export default App


