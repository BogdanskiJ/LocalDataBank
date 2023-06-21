import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Navigation from './common/Navigation'
import TeritorialUnitManyVariables from './features/teritorialUnit'
import LocalDataBank from './features/LocalDataBank'
import ManyVariablesOneUnit from './features/manyVariables'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/jednostki-terytorialne">
          <TeritorialUnitManyVariables />
        </Route>
        <Route path="/bank-danych-lokalnych">
          <LocalDataBank />
        </Route>
        <Route path="/dziedziny-tematyczne">
          <ManyVariablesOneUnit />
        </Route>
        <Route path="/">
          <Redirect to="/jednostki-terytorialne" />
        </Route>
      </Switch>
    </HashRouter>
  )
}
export default App
