import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'
import Autora from '../pages/Autora'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route path='/simpsons'component={Simpsons} />
                <Route path='/autora'component={Autora} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes