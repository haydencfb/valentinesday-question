import './App.css'
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FirstPage from './pages/first-page'
import SecondPage from './pages/second-page'
import ThirdPage from './pages/third-page'

function App() {

  const location = useLocation();
    useEffect(() => {
        switch (location.pathname) {
            default:
            document.title = 'First';
            break;

            case '/Second':
            document.title = 'SecondPage';
            break;

            case '/Third':
            document.title = 'ThirdPage';
            break;
        }
        }, [location]);

  return (

    <>
      <main>
        <Outlet />
      </main>
      {/* <FirstPage />
      <SecondPage />
      <ThirdPage /> */}
    </>
    
  )

}

export default App;
