import '../../assets/scss/sendComment.scss';

interface Iprops {
  isReply: boolean;
  onSend: React.MouseEventHandler<HTMLButtonElement>;
}

function SendComment(props: Iprops): JSX.Element {
  const placeholder = props.isReply ? 'reply' : 'your comment';

  return (
    <div className="send-comment">
      <textarea
        className="send-comment-input"
        placeholder={placeholder}
      ></textarea>
      <button className="send-comment-btn" onClick={props.onSend}>
        send
      </button>
    </div>
  );
}

export default SendComment;
