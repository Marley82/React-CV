import './App.css';

import Header from './components/header';
import Landing from './components/landing';
import Roles from './components/roles';

//calling the components within app()

function App() {
  return (
   <>
   <Header/>
   <Landing />
   <Roles />
   </>
  );
}
export default App;
