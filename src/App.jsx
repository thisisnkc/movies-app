
import './App.scss';
import LeftSidebar from './components/leftsidebar/leftsidebar';
import Rightsidebar from './components/rightsidebar/rightsidebar';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="app">
      <LeftSidebar />
      <Header />
      <Rightsidebar />
      <Main />
    </div>
  );
}

export default App;
