import '../../assets/scss/disussion.scss';
import SendComment from './SendComment';

function Disussion(): JSX.Element {
  // send comment handle
  function sendComment() {
    /**
     * send comment codes will be here
     */
  }

  return (
    <div className="disussion">
      {/* title */}
      <h3 className="disussion-title">
        <span className="disussion-title-text">Comments</span>
      </h3>

      {/* send comment */}
      <SendComment isReply={false} onSend={sendComment} />

      {/* comment list */}
      {/* <Comment /> */}
    </div>
  );
}

export default Disussion;
