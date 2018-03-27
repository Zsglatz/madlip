import React from 'react';
import {
    Col, 
    Row,
    Label
} from 'reactstrap';

class MadlibForm extends React.Component {

    handleChange = function() {
        console.log('Trying to handle change');
    }
    
    
    render() {
        return (
            <Row style={{textAlign: 'center', color: 'white'}}> 
                <Col md="3"> 
                    <Row>
                        <Col md="2">
                            <label className="greenLabel">1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder="Color" type='text' onChange={this.handleChange} />
                        </Col>
                    </Row>
                 </Col>
            <Row>
                <Col md="2">
                    <label className="greenLabel">1</label>
                </Col>
                <Col md="10">
                    <input placeholder="Color" type='text'/>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <label className="greenLabel">1</label>
                </Col>
                <Col md="10">
                    <input placeholder="Color" type='text'/>
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    <label className="greenLabel">1</label>
                </Col>
                <Col md="10">
                    <input placeholder="Color" type='text'/>
                </Col>
            </Row>
        </Row>
        )
    }
}

export default MadlibForm;
