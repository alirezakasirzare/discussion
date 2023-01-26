import '../assets/scss/footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className="main-footer">
      made with ❤️ by{' '}
      <a
        href="http:kasirzar.ir"
        target="_blank"
        rel="noreferrer"
        className="main-footer-link"
      >
        Alireza Kasirzae
      </a>
    </footer>
  );
}

export default Footer;
