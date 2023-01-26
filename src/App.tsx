import Footer from './components/Footer';
import Header from './components/Header';
import Disussion from './components/disussion/Disussion';
import './assets/scss/app.scss';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main className="container">
        <Disussion />
      </main>
      <Footer />
    </div>
  );
}

export default App;
