import { React, useState, useEffect } from 'react'
import './feature.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from "axios";
import { Link } from 'react-router-dom';

const Feature = ({ type, setGenre }) => {

    const [content, setContent] = useState({})
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/movie/random?type=${type}`,
                    {
                        headers:
                            { token: "bearer " + JSON.parse(localStorage.getItem('user')).accesstoken }
                    });
                setContent(res.data[0]);
                console.log(content)
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    }, [type])

    return (
        <div className='featured'>
            {type && <div className="category">
                <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                <select name="genre" id="genre" onChange={e => setGenre(e.target.value)}>
                    <option >Genre</option>
                    <option value="adventure">adventure</option>
                    <option value="comedy">comedy</option>
                    <option value="adventure">Action</option>
                    <option value="adventure">adventure</option>
                    <option value="adventure">adventure</option>
                    <option value="adventure">adventure</option>
                    <option value="adventure">adventure</option>
                </select>
            </div>}
            <img width="100%" src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <Link  style={{ textDecoration: 'none' }} to={{pathname:"/watch/" + content._id, state:{data:'vishal'}}}>
                    <button className="play">
                        <PlayArrow />
                        <span >play</span>
                    </button>
                    </Link>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feature