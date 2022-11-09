import React from 'react'
import BrowseByProperty from './BrowseByProperty/BrowseByProperty'
import Explorearround from './explorearround'
import Slider from './Slider_Component/Slider'
import Searchbar from './Search_Component/Searchbar'

function Home() {
  return <div>
    <Slider />
    <Searchbar/>
    <Explorearround />
    <BrowseByProperty />
  </div>
}

export default Home
