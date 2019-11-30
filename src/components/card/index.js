import React from 'react';
import { Card } from 'react-bootstrap';
export default (props) => {
    return (
        <>
            <Card>
                <Card.Header style={{ paddingTop: 10, fontFamily: "'Great Vibes', cursive" }}>
                    {props.CardHeader}
                </Card.Header>
                {props.CardBody}
            </Card>
        </>
    )
}