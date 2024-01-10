import React from 'react'
import './home.scss'
import Navbar from '../navbar/Navbar'
import Feature from '../features/feature'
import List from '../list/List'


const Home = () => {
    return (
        <div className="home" >
            <Navbar />
            <Feature type='movies' />
            <List/>
            <List/>
            <List/>


        </div>
    )
}

export default Home