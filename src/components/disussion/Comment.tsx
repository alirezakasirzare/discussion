import '../../assets/scss/comment.scss';
import { ReactComponent as HandThumbsUp } from '../../assets/icons/hand-thumbs-up.svg';
import IDiscussion from '../../models/IDiscussion';
import Reply from './Reply';
import { useState } from 'react';
import SendComment from './SendComment';

function Comment(props: IDiscussion): JSX.Element {
  // reply
  const [wantSendReply, setWantSendReply] = useState<boolean>(false);
  function toggleReplyForm() {
    setWantSendReply((prevState) => !prevState);
  }
  function handleSendReply() {
    /**
     * send reply codes will be here
     */
  }

  return (
    <div className="comment">
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
        <button
          className={`comment-body-likeBtn ${
            props.iLikedIt ? 'comment-body-likeBtn-active' : ''
          }`}
        >
          45
          <HandThumbsUp className="comment-body-likeBtn-icon" />
        </button>

        <button className="comment-body-replyBtn" onClick={toggleReplyForm}>
          reply
        </button>

        {/* reply form */}
        {wantSendReply && (
          <div className="comment-body-form">
            <SendComment onSend={handleSendReply} isReply />
          </div>
        )}

        {/* replys */}
        {!!props.replies.length && (
          <div className="comment-body-reply">
            {props.replies.map((reply) => (
              <Reply key={reply.id} {...reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
