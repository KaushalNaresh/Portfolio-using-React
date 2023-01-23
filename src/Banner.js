// import axios from './axios';
import React, {useEffect, useState} from 'react'
import './Banner.css'
import { AiFillHeart, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Tooltip } from 'react-tooltip'
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import  * as Constants from "./Constants";

function Banner() {

    const [like, setLike] = useState(false);
    const user = useSelector(selectUser);

    useEffect(() => {
        const db = getDatabase();
        const userRef = ref(db, "users/"+user.uid);
        onValue(userRef, (snapshot) => {
            if(snapshot.val() === null){
                set(userRef, {
                    email: user.email,
                    like: false,
                    comments: ""
                });
            }
            else{
                const likeRef = ref(db, "users/"+user.uid+"/like");
                onValue(likeRef, (snapshot) => {
                    const value = snapshot.val();
                    setLike(value);
                });
            }
        });

    },[])

    function changeLike(like, user){
        const db = getDatabase();
        const usersRef = ref(db, 'users/'+user.uid);
        set(usersRef, {
            email: user.email,
            like: like
        });
        setLike(like);
    }

    function getTotalLikeCount(){
        let count = 0;
        const db = getDatabase();
        const usersRef = ref(db, 'users/');
        onValue(usersRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => { 
                count += childSnapshot.val().like;
            });
        });
        return count;
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
                    <a href = "mailto:nkkaushal@ucdavis.edu" className='banner__button'><MdEmail/></a>
                    <a href = "https://github.com/KaushalNaresh" className='banner__button'><AiFillGithub/></a>
                    <a href = "https://www.linkedin.com/in/nareshkumarkaushal" className='banner__button'><AiFillLinkedin/></a>
                </div>
                <AiFillHeart    id = "like__button" 
                                data-tooltip-content={!like ? "I like this Resume" : "Rated"}
                                className={`resume__likeDislike ${like ? "like" : "dislike"}`}
                                onClick={() => changeLike(!like, user)}/>
                <Tooltip anchorId="like__button" arrow/>
                <span className='like__count'>{user.email === Constants.admin_email ? getTotalLikeCount()+" Likes" : ""}</span>
            </div>

            <div className='banner--fadeButton'/>
        </header>
  )
}

export default Banner