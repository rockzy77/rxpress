import { useEffect } from "react";
import { lightTheme } from "../../components/Colors";
import { FaStar } from "react-icons/fa";

const CommentSection = (props) => {

    return <div id="commentSection" className="commentSection">
        <textarea placeholder="Enter your review" name="newComment" id="newComment" cols="30" rows="10"></textarea>
        <button style={{
            backgroundColor: lightTheme.secondaryColor
        }} className="postBtn">Post</button>

        {
            props.comments.map((item, index)=>{
                return <div className="comment-tile">
                <div className="comment-tile-info">
                    <div className="user-info">
                        <div className="user-info-img">
    
                        </div>
    
                        <div className="user-info-des">
                            <p>{item.user}</p>
                            <span>{item.timestamp}</span>
                        </div>
                    </div>
                    
                    <div className="review">
                        {
                            [0,0,0,0,0].map((item2, index2)=>{
                                console.log(props.rating)
                                return <FaStar className={`star ${index2 < item.rating ? 'gold' : ''}`}/>
                            })
                        }
                    </div>
    
                    <div className="content">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, fuga eos assumenda excepturi nostrum sunt iure expedita distinctio! Totam impedit a assumenda suscipit ipsum numquam rem laborum praesentium in nisi?</p>
                    </div>
    
                    <hr />
                </div>
            </div>
            })
        }

    </div>
}

export default CommentSection;