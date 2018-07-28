import GridPanel from './modules/GridPanel'
import ReduxBox from './home/ReduxBox'
import React from 'react'
import {Redirect} from 'react-router-dom'
import RouteBox from './home/RouteBox'
import HocComp from './app/HocComp'
import Recursive from './home/RecursivePath'
import AntApp from './home/AntApp'

const About = props => <div>About {console.log('about')}</div>

function Box (props) {
    const {match} = props
    return <div>{match.path} : {match.params.name}</div>
}

export default [
    {
        path: '/about',
        key: 'about',
        component: About
    },
    {
        path: '/ant',
        key: 'antd',
        component: AntApp
    },
    {
        path: '/box/:name',
        key: 'box',
        component (props) {
            return (
                <Box {...props}/>
            )
        }
    },
    {
        path: '/GridPanel',
        key: 'GridPanel',
        component: GridPanel
    },
    {
        path: '/HocComp',
        key: 'HocComp',
        component: HocComp
    },
    {
        path: '/NumberBox',
        key: 'NumberBox',
        component: ReduxBox
    },
    {
        path: '/RouterBox/:name',
        key: 'RouterBox',
        component: RouteBox
    },
    {
        path: '/contact',
        key: 'contact',
        children ({match}) {
            return (
                <div>{match.path} contact</div>
            )
        }
    },
    {
        path: '/Redirect',
        key: 'Redirect',
        render () {
            return <Redirect to='/news'/>
        }
    },
    {
        path: '/news',
        key: 'news',
        render ({match}) {
            return (
                <div>{match.path} news</div>
            )
        }
    },
    {
        path: '/recursive/:id',
        key: 'recursive',
        component: Recursive
    }
]
