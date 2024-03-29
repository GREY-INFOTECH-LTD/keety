import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/OnBoarding'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elemnent={<Home />}/>
        <Route path="/dashboard" elemnent={<Dashboard />}/>
        <Route path="/onboarding" elemnent={<OnBoarding />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;