import './App.scss';
import LeftSidebar from './components/leftsidebar/leftsidebar';
import Rightsidebar from './components/rightsidebar/rightsidebar';
import Main from './components/main/main';

function App() {
  return (
    <div className="app">
      <LeftSidebar />
      <Main />
      <Rightsidebar />
    </div>
  );
}

export default App;
