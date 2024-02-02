import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../navbar/Navbar'
import Feature from '../features/feature'
import List from '../list/List'
import axios from "axios"


const Home = ({type}) => {
    const [lists, setList] = useState([])
    const [genre, setGenre] = useState()

  useEffect(()=>{
        const getRandomLists = async ()=>{
           try{
                const res = await axios.get(
                    `http://localhost:8800/api/list ${type ? '?type='+ type:""}${genre ? "&genre="+ genre:""}`,
                    {headers : {token : "bearer " + JSON.parse(localStorage.getItem('user')).accesstoken}
                   
                }
                );
                setList(res.data);
                // console.log(res.data)
           }catch(err){
            console.log(err);
           }
        }
        getRandomLists();
    }, [type,genre])
    
    return (
        <div className="home" >
            <Navbar />
            <Feature type={type} setGenre={setGenre}/>
           {
            lists.map((list)=>(
                <List list={list}/>
            ))
           }

        </div>
    )
}

export default Home