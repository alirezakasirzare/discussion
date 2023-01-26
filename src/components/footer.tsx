import '../assets/scss/footer.scss';
import { ReactComponent as HeartFill } from '../assets/icons/heart-fill.svg';

function Footer(): JSX.Element {
  return (
    <footer className="main-footer">
      <span>made with</span>
      <HeartFill className="main-footer-icon" />
      <span>
        by
        <a
          href="http://kasirzare.ir"
          target="_blank"
          rel="noreferrer"
          className="main-footer-link"
        >
          {' '}
          Alireza Kasirzae
        </a>
      </span>
    </footer>
  );
}

export default Footer;
