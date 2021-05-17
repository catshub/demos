import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MICRO_APP_NAME } from 'config'
import Routes from './Routes'

export default function App() {
  return (
    <div id={`app-${MICRO_APP_NAME}-content`}>
      <HashRouter basename={`/${MICRO_APP_NAME}`}>
        <Switch>
          {Routes.map((route) => (
            <Route exact key={route.path.toString()} path={route.path} component={route.component} />
          ))}
        </Switch>
      </HashRouter>
    </div>
  )
}
