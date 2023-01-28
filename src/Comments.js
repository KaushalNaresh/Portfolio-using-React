import React, {useEffect, useState} from 'react';
import './Comments.css';
import {IoMdSend} from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { getDatabase, ref, set, query, push, onValue, orderByChild } from "firebase/database";
import CommentList from './CommentList';
import * as Constants from './Constants';

function Comments() {

    const user = useSelector(selectUser);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    function getComments(){

        const db = getDatabase();

        if(user.email === Constants.admin_email){
            const userRef = ref(db, 'users/');
            let commtList = [];
            onValue(userRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const commts = childSnapshot.val().comments;
                    // console.log(childSnapshot.key);
                    // const qryRef = query(ref(db, 'users/' + childSnapshot.key+'/comments'), orderByChild('timestamp'));
                    if(commts.length !== 0){
                        // console.log('users/' + childSnapshot.key+'/comments');
                        const qryRef = query(ref(db, 'users/' + childSnapshot.key+'/comments'), orderByChild('timestamp'));
                        onValue(qryRef, (commentSnapshot) => {
                            commentSnapshot.forEach((childCommentSnapshot) => {
                                commtList.push(childCommentSnapshot.val());
                            });
                            // commtList.push(commentSnapshot.val());
                        });
                        // Object.keys(commts).forEach((key)=>{
                        //     commtList.push(commts[key]);
                        // });
                    }
                });
                setComments(commtList);
                for(let i = 0; i < comments.length; i++){
                    console.log(comments[i].timestamp);
                }
            });
        }
        else{
            const userRef = ref(db, 'users/'+user.uid+"/comments");
            let commtList = [];
            onValue(userRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    commtList.push(childSnapshot.val());
                });
                setComments(commtList);
            });
        }
    }
    
    useEffect(() => {
        getComments();
    }, []);
    
    function postComment(){
        const db = getDatabase();
        const commentListRef = ref(db, 'users/'+user.uid+"/comments");
        const newCommentRef = push(commentListRef);
        set(newCommentRef, {
            postedBy: user.email,
            text: commentText,
            timestamp: Date.now()
        });
        setCommentText("");
        getComments();
    }
    return (
        <>
            <div className='comment__form'>
                <textarea 
                        placeholder='Enter your feedback here!'
                        className="comment__form__text" type="text"
                        value = {commentText}
                        onChange = {evt => setCommentText(evt.target.value)}/>
                <IoMdSend className='comment__form__sendButton' onClick={() => postComment()}/>
            </div>
            <CommentList comments={comments}/>
        </>
    );
}

export default Comments