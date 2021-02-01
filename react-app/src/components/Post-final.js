import reaction from '../images/reaction.png';
import like from '../images/like.png';
import comment from '../images/comment.png';
import share from '../images/share.png';
import './Post.css';

// added margin to postBox in css

function Post(props) {
    return (
      <div className="postBox">
        <div className="account">
          <strong>{props.account}</strong>
        </div>
        <img className="postImage" src={props.image}/>
        <div className="reaction-line">
          <img className="reaction" src={reaction}/>
          <p>Eric, Nareh, and 10 others</p>
        </div>
        <hr className="line"/>
        <div className="actions-line">
          <div className="action">
            <img className="icon" src={like}/>
            <p>Like</p>
          </div>
          <div className="action">
            <img className="icon" src={comment}/>
            <p>Comment</p>
          </div>
          <div className="action">
            <img className="icon" src={share}/>
            <p>Share</p>
          </div>
        </div>
      </div>
  );
}

export default Post;