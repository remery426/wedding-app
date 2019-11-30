import React from "react";
import MollyRyanPics from "./MollyRyanPics.json";
import ControlBar from "./ControlBar";
import { Col, Card, Row } from "react-bootstrap";

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.images = MollyRyanPics;
        this.state = {
            currentImage: 0,
            paused: false
        };
        this.updateImage = this.updateImage.bind(this);
    }
    componentDidMount() {
        // make call to get images
        // maybe hard code is fine...

        console.log(this.images);
        this.setTimerImage();
    }
    /*
          takes an integer that specfies which direction the carousel will move in
      */
    updateImage(add) {
        let { currentImage } = this.state;
        let newImage;
        if (add > 0) {
            newImage = currentImage !== this.images.length - 1 ? currentImage + 1 : 0;
        } else if (add < 0) {
            newImage = currentImage !== 0 ? currentImage - 1 : this.images.length - 1;
        }

        this.setState({
            currentImage: newImage
        });
    }
    pauseCarousel() {
        clearInterval(this.timer);
        this.setState({
            paused: true
        })
    }
    setTimerImage() {
        this.setState({
            paused: false
        })
        this.timer = setInterval(() => {
            this.updateImage(1);
        }, 4000);
    }
    render() {
        const { currentImage, paused } = this.state;
        return (
            <>
                <Col md={{ span: 4, offset: 4 }}>
                    <Row >
                        <img
                            style={{ width: 600, height: 500 }}
                            src={this.images[currentImage].url}
                            alt='Images of Ryan and Molly'
                        />
                    </Row>
                    <ControlBar

                        paused={paused}
                        updateImage={this.updateImage}
                        pauseCarousel={() => {
                            this.pauseCarousel();
                        }}
                        playCarousel={() => {
                            this.setTimerImage();
                        }}
                    />
                </Col>
            </>
        );
    }
}
