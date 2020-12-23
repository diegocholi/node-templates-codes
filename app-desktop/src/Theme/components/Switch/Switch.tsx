import { Switch as SwitchCP, Route } from 'react-router-dom'
import routes from '../../../routes/routes'

export interface SwichProps {}

const Swich: React.FC<SwichProps> = () => {
  return (
    <SwitchCP>
      {routes.map((item, index) => {
        if (index === 0)
          return (
            <Route key={index} exact path={item.link}>
              <item.render />
            </Route>
          )
        return (
          <Route key={index} path={item.link}>
            <item.render />
          </Route>
        )
      })}
    </SwitchCP>
  )
}

export default Swich
