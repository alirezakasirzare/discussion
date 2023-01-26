import Footer from './components/Footer';
import Header from './components/Header';
import Disussion from './components/disussion/Disussion';
import './assets/scss/app.scss';
import discussions from './data/discussions';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main className="container">
        <Disussion discussions={discussions} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
