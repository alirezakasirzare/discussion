import '../../assets/scss/sendComment.scss';

interface Iprops {
  isReply: boolean;
}

function SendComment({ isReply }: Iprops): JSX.Element {
  const placeholder = isReply ? 'reply' : 'your comment';

  return (
    <div className="send-comment">
      <textarea
        className="send-comment-input"
        placeholder={placeholder}
      ></textarea>
      <button className="send-comment-btn">send</button>
    </div>
  );
}

export default SendComment;
