import {Component} from 'react'
import PropTypes from 'prop-types'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

class NumberBox extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        countDown: PropTypes.func.isRequired,
        countUp: PropTypes.func.isRequired
    }
    render () {
        const {value, countDown, countUp} = this.props
        return (
            <div className='numberbox'>
                <button onClick={countDown} disabled={value < 1}>-</button>
                <input type='text' value={value} disabled/>
                <button onClick={countUp} disabled={value > 10}>+</button>
            </div>
        )
    }
}

// action
const actions = {
    countDown: {
        type: 'COUNT_DOWN'
    },
    countUp: {
        type: 'COUNT_UP'
    }
}

// mapper
const mapStateToProps = (state) => {
    return {
        value: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        countDown: () => dispatch(actions.countDown),
        countUp: () => dispatch(actions.countUp)
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(NumberBox)

// connect建立了props关系
// 传入函数用于向上更新数据
// 传入状态用于向下更新数据
// connect(
//     function (state) {
//         return {value: state.count}
//     },
//     function (dispatch) {
//         return {
//             countDown () {
//                 // 正真的数据更新需要放到reducer中
//                 dispatch({type: 'COUNT_DOWN'})
//                 // store.setState({count: count - 1})
//                 // store更新在更新组件 comp.setState({value: count})
//             },
//             countUp () {
//                 dispatch({type: 'COUNT_UP'})
//             }
//         }
//     }
// )

// reducer
function reducer (state = {count: 0}, action) {
    const count = state.count
    switch (action.type) {
    case 'COUNT_DOWN': return {count: count - 1}
    case 'COUNT_UP': return {count: count + 1}
    default: return {count}
    }
}

const store = createStore(reducer)

class AppBox extends Component {
    render () {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

export default AppBox
