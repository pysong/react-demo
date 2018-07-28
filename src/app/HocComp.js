import React from 'react'

// 函数组件是无状态组件，不可绑定ref
function StateLessBox (props) {
    return <textarea value={props.value}
        onChange={props.onChange}></textarea>
}

class TextBox extends React.Component {
    render () {
        const props = this.props
        return <textarea value={props.value}
            onChange={props.onChange}></textarea>
    }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.value && nextProps.value.match(/0/)) {
            // 如果阻止更新，视图也会被回退
            return false
        }
        return true
    }
}

class FormBox extends React.PureComponent {
    render () {
        const props = this.props
        return <textarea value={props.value}
            onChange={props.onChange}></textarea>
    }
}

export default class HocComp extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            message: 'message'
        }
        window.hoc = this
        this.changeValue = this.changeValue.bind(this)
    }
    render () {
        const {message} = this.state
        const changeValue = this.changeValue
        return (
            <div>
                <h2>{message}</h2>
                <StateLessBox
                    value={message}
                    onChange={changeValue}/>
                <FormBox value={message}
                    onChange={changeValue}
                    ref='ibox'/>
                <TextBox value={message}
                    onChange={changeValue}
                    ref={(box) => {
                        this.box = box
                    }}></TextBox>
            </div>
        )
    }
    changeValue (e) {
        debugger
        this.setState({
            message: e.target.value
        })
    }
}
