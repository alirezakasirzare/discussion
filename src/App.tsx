import Footer from './components/Footer';
import Header from './components/Header';
import Discussion from './components/discussion/Discussion';
import './assets/scss/app.scss';
import discussions from './data/discussions';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main className="container">
        <Discussion discussions={discussions} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
