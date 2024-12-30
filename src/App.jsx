import Nav from './components/Nav'
import Routing from './routing/Routing'
import { useSelector } from 'react-redux'
import Signin from './pages/signin/Signin'
import loginreducer from './reducer/loginReducer'

function App() {
  let isLoggedIn=useSelector((storeData)=>{
    return storeData.loginreducer.isLoggedIn
  })
  return (
    <div>
    {
        isLoggedIn ? <Nav/> : null
    }
    <Routing></Routing>
    </div>
  )
}
 
export default App
