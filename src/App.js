import { Bounce, ToastContainer } from 'react-toastify';
import './App.css';
import { Counter } from './components/Counter';
import { List } from './components/List';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const listD = localStorage.getItem('listD');
  let listData = [];
  if (listD) {
    try {
      listData = JSON.parse(listD);
    } catch (e) {
      console.error('Error parsing data from localStorage:', e);
    }
  }
  const [list, setList] = useState(listData)
  return (
    <div style={{ minHeight: '100vh', background: '#b5f5f2', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <h1>Counter & List App</h1>
      <Counter list={list} setList={setList} />
      <List list={list} setList={setList} listData={listData} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Helmet>
        <title>Counter & List</title>
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" /> */}
    {/* <link rel="icon" href="%PUBLIC_URL%/logo.png" /> */}
      </Helmet>
    </div>
  );
}

export default App;
