import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Navigation} from './common/Navigation'
import TeritorialUnitManyVariables from './features/baseLocalData/teritorialUnitManyVariables'
import BDL from './features/bdl'

export function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* <TeritorialUnit /> */}
      <Switch>
        <Route path="/maps/Poland">
          <TeritorialUnitManyVariables />
        </Route>
        <Route path="/bdl">
          <BDL />
        </Route>
        {/* <Route path="/maps/provinces/:name">
						<MapProvinces />
					</Route> */}
        <Route path="/">
          <Redirect to="/maps/Poland" />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
