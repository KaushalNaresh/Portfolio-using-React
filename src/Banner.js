// import axios from './axios';
import React, {useEffect, useState} from 'react'
import './Banner.css'
import { AiFillHeart, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Banner() {

    const [like, setLike] = useState(false);
    const user = useSelector(selectUser);

    useEffect(() => {
        const db = getDatabase();
        const userRef = ref(db, "users/"+user.uid+"/like");

        onValue(userRef, (snapshot) => {
            const value = snapshot.val();
            setLike(value);
        });

    },[user])

    function changeLike(like, user){
        const db = getDatabase();
        const usersRef = ref(db, 'users/'+user.uid);
        set(usersRef, {
            email: user.email,
            like: like
        });
        setLike(like);
    }

    return (
        <header className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://tinyurl.com/mrh4jpe5)`,
            backgroundPosition: "center center",
        }}>
            
            <div className='banner__contents'>
                <h1 className="banner__title">
                    Naresh Kumar Kaushal <span>(he/him)</span>
                </h1>
                <div className='banner__buttons'>   
                    <a href = "mailto:09naresh3@gmail.com" className='banner__button'><MdEmail/></a>
                    <a href = "https://github.com/KaushalNaresh" className='banner__button'><AiFillGithub/></a>
                    <a href = "https://www.linkedin.com/in/nareshkumarkaushal" className='banner__button'><AiFillLinkedin/></a>
                </div>
                <AiFillHeart    id = "like__button" 
                                data-tooltip-content="I like this Resume"
                                className={`resume__likeDislike ${like ? "like" : "dislike"}`}
                                onClick={() => changeLike(!like, user)}/>
                {
                    !like && <Tooltip anchorId="like__button" arrow/>
                }
            </div>

            <div className='banner--fadeButton'/>
        </header>
  )
}

export default Banner