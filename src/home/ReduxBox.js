import React from 'react'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'
import {withRouter} from 'react-router-dom'

class ReduxBox extends React.Component {

    render () {
        const {down, up, value, match} = this.props || {}
        return (
            <div>
                <div>{match.path}</div>
                <a onClick={down}>-</a>
                    <span>{value}</span>
                <a onClick={up}>+</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        down () {
            dispatch({
                type: 'COUNT_DOWN'
            })
        },
        up () {
            dispatch({
                type: 'COUNT_UP'
            })
        }
    }
}

// withRouter 是全局有效的
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(ReduxBox))

const StoreReducer = (state = {value: 0}, action) => {
    const {value} = state
    switch (action.type) {
    case 'COUNT_DOWN': return {value: value - 1}
    case 'COUNT_UP': return {value: value + 1}
    default: return {value}
    }
}

const store = createStore(StoreReducer)

let Box = props => (
    <div>box / {props.value}</div>
)

Box = connect(mapStateToProps)(Box)

export default function () {
    return (
        <Provider store={store}>
            <div>
                <App/>
                <App/>
                <Box/>
            </div>
        </Provider>
    )
}
