// in imports, ../ means parent directory
import reaction from '../images/reaction.png';
import image from '../images/event.png';
import like from '../images/like.png';
import comment from '../images/comment.png';
import share from '../images/share.png';
import './Post.css';

function Post() {
  return (
    <div className="postBox">
      <div className="account">
        <strong>queer_hack</strong>
      </div>
      <img className="postImage" src={image} alt="Post" />
      <div className="reaction-line">
        <img className="reaction" src={reaction} alt="Number of reactions" />
        <p>Michael, Lindsay, and 10 others</p>
      </div>
      <hr className="line"/>
      <div className="actions-line">
        <div className="action">
          <img className="icon" src={like} alt="" />
          <button>Like</button>
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