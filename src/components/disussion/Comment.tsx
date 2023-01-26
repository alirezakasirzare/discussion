import '../../assets/scss/comment.scss';
import IComment from '../../models/IComment';
import { ReactComponent as HandThumbsUp } from '../../assets/icons/hand-thumbs-up.svg';

function Comment(props: IComment): JSX.Element {
  return (
    <div className="comment">
      <div className="comment-head">
        <div className="comment-head-name">
          <img
            src={props.user.avatar}
            alt={props.user.name}
            className="comment-head-name-img"
          />
          <strong className="comment-head-name-text">{props.user.name}</strong>
        </div>
        <i className="comment-head-date">1234/12/12</i>
      </div>
      <div className="comment-text">
        <p className="comment-text-content">{props.text}</p>
        <button className="comment-like">
          {' '}
          {/* comment-btn-active */}
          45
          <HandThumbsUp className="comment-like-icon" />
        </button>

        <button className="comment-reply">reply</button>
      </div>
    </div>
  );
}

export default Comment;
