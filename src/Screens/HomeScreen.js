import React from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import Education from '../Education'
import WorkExperience from '../WorkExperience'
import Projects from '../Projects'
import ContactMe from '../ContactMe'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
        <Education />
        <WorkExperience />
        <Projects/>
        {/* <ContactMe /> */}
        {/* <Comments/> */}
    </div>
  )
}

export default HomeScreen