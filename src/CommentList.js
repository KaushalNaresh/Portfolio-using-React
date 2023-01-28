import React from 'react'
import "./CommentList.css"

const CommentList = ({comments}) => (
    <>  
        <h2 className='comment__list__heading'>Comments:</h2>
        <div className='comments'>
            {comments?.map((comment) => (
                <div className="comment" key={comment.timestamp}>
                    <p>{comment.postedBy} : </p>
                    <p>&nbsp;{comment.text}</p>
                </div>
            ))}
        </div>
    </>
);

export default CommentList;