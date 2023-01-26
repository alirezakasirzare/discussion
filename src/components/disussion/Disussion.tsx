import '../../assets/scss/disussion.scss';
import IDiscussion from '../../models/IDiscussion';
import Comment from './Comment';
import SendComment from './SendComment';

interface Iprops {
  discussions: IDiscussion[];
}

function Disussion({ discussions }: Iprops): JSX.Element {
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
      {discussions.map((discussion) => (
        <Comment key={discussion.id} {...discussion} />
      ))}
    </div>
  );
}

export default Disussion;
