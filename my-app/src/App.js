import './App.css'
import {Route,Switch} from 'react-router-dom'
import UserLogin from './components/UserLogin'
import Counter from './components/Counter'
import GridData from './components/GridData'

const App = () => (
  
<Switch>
     <Route exact path="/login" component={UserLogin}/>
     <Route exact path="/" component={Counter}/>
     <Route exact path="/grid" component={GridData}/>
</Switch>
)
export default App