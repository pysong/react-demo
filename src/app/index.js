import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import Navigator from './Navigator'
import ContentPanel from './ContentPanel'

export default class Hello extends React.Component {
    render () {
        const routerConf = this.props.routerConf
        return (
            <Router>
                <div>
                    <Navigator items={routerConf}/>
                    <hr/>
                    <div>
                        <ContentPanel items={routerConf}/>
                    </div>
                </div>
            </Router>
        )
    }
}
