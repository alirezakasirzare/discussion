import '../../assets/scss/disussion.scss';

function Disussion(): JSX.Element {
  return (
    <div className="disussion">
      {/* title */}
      <h3 className="disussion-title">
        <span className="disussion-title-text">Comments</span>
      </h3>

      {/* send comment */}
      <div className="send-comment">
        <textarea></textarea>
        <button>submit</button>
      </div>
    </div>
  );
}

export default Disussion;
