import {Component, createElement as h} from 'react' 
import moment from 'moment'

import { DatePicker, Button,  Row, Col} from 'antd'
import 'antd/dist/antd.css'


export default class App extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <Button type="primary" icon="download">Add new Item</Button>
                    </Col>
                    <Col span={8} offset={8}>
                        <DatePicker defaultValue={moment('2018-01-01', 'YYYY-MM-DD')}></DatePicker>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        hhhh
                    </Col>
                    <Col>
                        hahha
                    </Col>
                </Row>
            </div>
        )
    }
}