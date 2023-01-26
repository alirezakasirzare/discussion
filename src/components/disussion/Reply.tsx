import { ReactComponent as HandThumbsUpFill } from '../../assets/icons/hand-thumbs-up-fill.svg';
import { ReactComponent as HandThumbsUp } from '../../assets/icons/hand-thumbs-up.svg';
import IComment from '../../models/IComment';
import '../../assets/scss/reply.scss';

function Reply(props: IComment): JSX.Element {
  return (
    <div className="comment comment-reply">
      {/* head */}
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
      {/* body */}
      <div className="comment-body">
        <p className="comment-body-text">{props.text}</p>
        <button className={`comment-body-likeBtn`}>
          {props.likes} &nbsp;{' '}
          {props.iLikedIt ? <HandThumbsUpFill /> : <HandThumbsUp />}
        </button>
      </div>
    </div>
  );
}

export default Reply;
