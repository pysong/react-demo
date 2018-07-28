import {HashRouter as Router, Route, Link} from 'react-router-dom'

import reactCSS from 'reactcss'

const CSS = {
    'default': {
        card: {
            background: '#FFF',
            margin: '10px 20px 0'
        },
        item: {
            color: '#000'
        }
    },
    'hidden': {
        card: {
            display: 'none'
        }
    },
    'actived': {
        card: {
            background: '#EEE',
            border: '1px solid #EEE',
            boxShadow: '0 2px 4px rgba(0,0,0,.15)'
        },
        item: {
            color: 'red'
        }
    }
}

const PEEPS = [
  {id: 0, name: 'Michelle', friends: [1, 2, 3]},
  {id: 1, name: 'Sean', friends: [0, 3]},
  {id: 2, name: 'Kim', friends: [0, 1, 3]},
  {id: 3, name: 'David', friends: [1, 2]}
]

const find = id => PEEPS.find(p => p.id === id)

const RecursiveExample = () => (
  <div>
    <Router>
        <Person match={{params: {id: 0}, url: '/recursive'}}/>
    </Router>
  </div>
)

let Person = ({match}) => {
    let id = +match.params.id
    id = id >= 0 ? id : 0
    const person = find(id)
    // 动态计算state，改变样式状态
    const state = {actived: id % 2 === 0, hidden: false}
    const styles = reactCSS(CSS, state)
    return (
    <div style={styles.card}>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id} style={styles.item}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  )
}

export default RecursiveExample
