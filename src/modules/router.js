import React from 'react'
import {render} from 'react-dom'

import {
  HashRouter as Router, // 路由模块-容器
 // createMemoryHistory, hashHistory, browserHistory, // 状态模式
  NavLink, Link, // 路由链接
  IndexRoute, Route // 路由单元-必需是组件
} from 'react-router-dom'

// history.replaceState 修改URL地址栏，并保证不会刷新页面
const root = document.body.querySelector('#main')
const activeStyle = {color: 'green', fontWeight: 'bold'}

const App = (props) => (
    <div className='app-main'>
      <h2>一个嵌套路由的例子</h2>
      <Router basename='/'>
        <div>
          <NavLink exact to='/home' activeStyle={activeStyle}>Home</NavLink>
          <NavLink exact to='/app/news' activeStyle={activeStyle}>News</NavLink>
          <NavLink exact to='/app/about' activeStyle={activeStyle}>About</NavLink>
          <NavLink exact to='/app/other' activeStyle={activeStyle}>Other</NavLink>
          <Route exact path='/home' component={Home}/>
          <Route path='/app/:module' component={Layout}></Route>
        </div>
      </Router>
    </div>
)

class Layout extends React.Component {
    componentWillMount () {
        debugger
    }
    render () {
        const match = this.props.match.params
        const module = match.module || 'news'
        return (
        <Router basename='/app' >
          <div>
            <h2>{module}</h2>
            <NavLink exact to='/news' activeStyle={activeStyle}>News</NavLink>
            <NavLink exact to='/about' activeStyle={activeStyle}>about</NavLink>
            <Route exact path='/news' component={News}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='*' component={Other}/>
          </div>
        </Router>
    )
    }
}

const Home = (props) => {
    return <h1>Home</h1>
}

const About = (props) => {
    return <h1>Accounts</h1>
}

const Other = (props) => {
    return <h1>NotFound</h1>
}

const News = (props) => {
    return <h1>News</h1>
}

class List extends React.Component {
    constructor (props) {
        super(props)
        console.dir(props)
    }
    render () {
        const params = this.props.match.params
        return <h1>{params.key || 'list'}</h1>
    }
}

/**
 * 定义一个路由注册器
 */
const RouterLinks = (props) => {
    const Template = React.Fragment
    const SubLinks = function () {
        return routers.map(
        r => (
          <Route exact path={r.path} component={r.component} key={r.path}/>
        )
      )
    }

    return (
      <Template>
          <SubLinks/>
      </Template>
    )
}

/**
 * 路由配置
 */
const routers = [
    {
        path: '/top',
        name: 'Home',
        component: Home
    },
    {
        path: '/list',
        name: 'List',
        component: List
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/news',
        name: 'news',
        component: News
    }
]

render(<App routers={routers}/>, root)

