import React from "react";
import Play from "./Play";
import Pause from "./Pause";
import Previous from "./Previous";
import SkipForward from "./SkipForward";
import { Col, Row, Button } from "react-bootstrap";

export default props => {
    return (
        <Row style={{ paddingLeft: '20%' }}>
            <Col>
                <Previous onClick={props.updateImage} />
            </Col>
            <Col>
                {props.paused ? (
                    <Play onClick={props.playCarousel} />
                ) : (
                        <Pause onClick={props.pauseCarousel} />
                    )}
            </Col>
            <Col>
                <SkipForward onClick={props.updateImage} />
            </Col>
        </Row>
    );
};
