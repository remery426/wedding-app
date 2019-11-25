import React from 'react';
import Play from './play';
import Pause from './Pause';
import Previous from './Previous';
import SkipForward from './SkipForward';
import { Col, Row } from 'react-bootstrap';

export default (props) => {
    return (
        <Row>
            <Col>
                <Previous />
            </Col>
            <Col>
                {props.paused ? <Play /> : <Pause />}
            </Col>
            <Col>
                <SkipForward />
            </Col>
        </Row>
    )
}