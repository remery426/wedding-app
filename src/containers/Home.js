import React from 'react';
import Carousel from '../components/carousel';
import Card from '../components/card';
import { Row, Col } from 'react-bootstrap';

const addressInfo = () => {
    return (
        <>
            <p>
                DOR Chapter House
            </p>
            <p>
                123 Cap hill
        </p>
            <p>
                Seattle, WA 98103
        </p>
        </>
    )
}
const scheduleInfo = () => {
    return (
        <>
            <p>Ceremony: 4:00 - 5:00</p>
            <p> Cocktail Hour(vlad and dew): 6:00 -7:00 </p>
            <p>Dinner: 7:00 - 8:00</p>
            <p> Couples first dance(entire rl grime halloween 8): 8:00 - 9:00</p>
        </>
    )
}
export default () => {
    return (
        <>
            <Carousel />
            <Card CardHeader='Welcome' CardBody='We are so happy to invite you to our wedding, or that you have some how navigated to this random url. Please join us in celebrating! Here is some more text to get an idea what this page might look like. This is probably enough.' />
            <Row>
                <Col>
                    <Card CardHeader='Location' CardBody={addressInfo()} />
                </Col>
                <Col>
                    <Card CardHeader='Schedule' CardBody={scheduleInfo()} />
                </Col>
            </Row>
        </>
    )
}