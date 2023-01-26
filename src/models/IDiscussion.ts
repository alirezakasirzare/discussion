import IComment from './IComment';

interface IDiscussion extends IComment {
  replies: IComment[];
}

export default IDiscussion;
