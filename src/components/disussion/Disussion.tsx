import '../../assets/scss/disussion.scss';
import IDiscussion from '../../models/IDiscussion';
import Comment from './Comment';
import SendComment from './SendComment';

interface Iprops {
  discussions: IDiscussion[];
}

function Disussion({ discussions }: Iprops): JSX.Element {
  return (
    <div className="disussion">
      {/* title */}
      <h3 className="disussion-title">
        <span className="disussion-title-text">Comments</span>
      </h3>

      {/* send comment */}
      <SendComment isReply={false} />

      {/* comment list */}
      {discussions.map((discussion) => (
        <Comment key={discussion.id} {...discussion} isReply={false} />
      ))}
    </div>
  );
}

export default Disussion;
