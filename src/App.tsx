import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Swap from './pages/Swap'
import Token from './pages/Token'
import Pool from './pages/Pool'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Swap />} />
        <Route path='token' element={<Token />} />
        <Route path='pool'element={<Pool/>}/>
      </Route>
    </Routes>
  )
}

export default App
