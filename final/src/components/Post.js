// in imports, ../ means parent directory
import reaction from '../images/reaction.png';
import image from '../images/event.png';
import like from '../images/like.png';
import comment from '../images/comment.png';
import share from '../images/share.png';
import './Post.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function Post(props) {
  const [likes, setLikes] = useState(2); // initial value of `likes` is set to 2

  // useEffect(() => { blah blah }, []) runs "blah blah" at the start of when our web page loads
  useEffect(() => {
    axios.get('http://localhost:3001/likes')
      .then(response => setLikes(response.data.likes));
  }, [])

  function likeHandler(event) {
    // Increment likes
    setLikes(oldLikes => {
      axios.post('http://localhost:3001/likes', { likes: oldLikes + 1 });
      return oldLikes + 1; // now likes will be incremented
    });
  }

  return (
    <div className="postBox">
      <div className="account">
        <strong>{props.account}</strong>
      </div>
      <img className="postImage" src={props.image} alt="Post" />
      <div className="reaction-line">
        <img className="reaction" src={reaction} alt="Number of reactions" />
        {/* <p>Michael, Lindsay, and 10 others</p> */}
        <p>Michael, Lindsay, and {likes} others</p>
      </div>
      <hr className="line"/>
      <div className="actions-line">
        <div className="action">
          <img className="icon" src={like} alt="" />
          <button onClick={(event) => likeHandler(event)}>Like</button>
        </div>
        <div className="action">
          <img className="icon" src={comment} alt="" />
          <p>Comment</p>
        </div>
        <div className="action">
          <img className="icon" src={share} alt="" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;