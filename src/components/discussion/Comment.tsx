import '../../assets/scss/comment.scss';
import { ReactComponent as HandThumbsUp } from '../../assets/icons/hand-thumbs-up.svg';
import { ReactComponent as HandThumbsUpFill } from '../../assets/icons/hand-thumbs-up-fill.svg';
import { ReactComponent as ReplyIcon } from '../../assets/icons/reply.svg';
import { ReactComponent as ReplyFillIcon } from '../../assets/icons/reply-fill.svg';
import { useState } from 'react';
import SendComment from './SendComment';
import profileImage from '../../assets/img/profile.png';
import IComment from '../../models/IComment';
import IDiscussion from '../../models/IDiscussion';

interface IProps extends IComment {
  replies?: IComment[];
  isReply: boolean;
}

function Comment(props: IProps): JSX.Element {
  // reply
  const [wantSendReply, setWantSendReply] = useState<boolean>(false);
  function toggleReplyForm() {
    setWantSendReply((prevState) => !prevState);
  }

  // date
  const commnetDate = new Date(props.date).toLocaleDateString();

  return (
    <div className={`comment ${props.isReply ? 'comment-reply' : ''}`}>
      {/* head */}
      <div className="comment-head">
        <div className="comment-head-name">
          <img
            src={props.user.avatar || profileImage}
            alt={props.user.name}
            className="comment-head-name-img"
          />
          <strong className="comment-head-name-text">{props.user.name}</strong>
        </div>
        <i className="comment-head-date">{commnetDate}</i>
      </div>
      {/* body */}
      <div className="comment-body">
        <p className="comment-body-text">{props.text}</p>
        <button className={`comment-body-likeBtn`}>
          {props.likes} &nbsp;{' '}
          {props.iLikedIt ? <HandThumbsUpFill /> : <HandThumbsUp />}
        </button>

        {!props.isReply && (
          <button className="comment-body-replyBtn" onClick={toggleReplyForm}>
            reply &nbsp;
            {wantSendReply ? <ReplyFillIcon /> : <ReplyIcon />}
          </button>
        )}

        {/* reply form */}
        {wantSendReply && (
          <div className="comment-body-form">
            <SendComment isReply />
          </div>
        )}

        {/* replys */}
        {!props.isReply && !!props.replies?.length && (
          <div className="comment-body-reply">
            {props.replies.map((reply) => (
              <Comment key={reply.id} {...reply} isReply />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
