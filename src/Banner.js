// import axios from './axios';
import React from 'react'
import './Banner.css'
import { AiFillHeart, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import myPic from "./images/my_pic.png";
import { Tooltip } from 'react-tooltip'

function Banner() {

//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function fetchData(){
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         setMovie(
//             request.data.results[
//                 Math.floor(Math.random() * request.data.results.length-1)
//             ]
//         );
//         return request;
//     }
//     fetchData();
//   }, []);

//   console.log(movie);

//   function truncate(string, n){
//     // console.log(string)
//     return string?.length > n ? string.substr(0, n)+'...' : string;
//   }

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
                    {/* <button className='banner__button'><AiFillLike/></button> */}

                </div>
                {/* <h1 className='banner__description'>
                    MSCS Graduate Student and Teaching Assistant at UC Davis, actively looking for summer internships 2023 | IIT GOA - Alumnus, Institute Bronze medallist
                </h1> */}
                <AiFillHeart    id = "like__button" 
                                data-tooltip-content="I like this Resume"
                                className='resume__like'/>
                <Tooltip anchorId="like__button" arrow/>
            </div>

            <div className='banner--fadeButton'/>
        </header>
  )
}

export default Banner