import './App.css';
import {useStateValue} from './contextApi/StateProvider';
import Feed from './feed/Feed';
import Header from './header/Header';
import Login from './Login/Login';
import Sidebar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

      {/* app body */}
      {/* sidebar */}
      {/* feed */}
    </div>
  );
}

export default App;
