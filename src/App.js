
import './App.scss';
import { Routes,Route  } from 'react-router-dom';
import Layout from './components/Layout/index.js'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout></Layout>} />
    </Routes>
    </>
  )
   
}

export default App;
