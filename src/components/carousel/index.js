import React from 'react';
import MollyRyanPics from './MollyRyanPics.json';
import ControlBar from './ControlBar';
export default class Carousel extends React.Component {
    constructor(props){
      super(props);
      this.images =  MollyRyanPics;
      this.state = {
          currentImage:0
      }

    }
    componentDidMount(){
        //make call to get images
        // maybe hard code is fine...
       
        console.log(this.images)
        this.setTimerImage();
    }
    /*
        takes an integer that specfies which direction the carousel will move in
    */
    updateImage(add){
        let {currentImage} = this.state;
        let newImage;
        if(add>0){
            newImage = currentImage != this.images.length -1? currentImage + 1 : 0 
        } else if(add <0){
            newImage = currentImage != 0? currentImage -1 : this.images.length -1 

        }
         
        this.setState({
            currentImage: newImage
        })
    }
    pauseCarousel(){
        this.timer.clearInterval();
    }
    setTimerImage(){
        this.timer = setInterval(()=>{
            this.updateImage(1)
        },4000);
    }
    render(){
        const {currentImage} = this.state;
        return(
            <>
            <img style={{width:300, height:300}} src = {this.images[currentImage].url}/>
            <ControlBar
            updateImage = {this.updateImage} 
            pauseCarousel={this.pauseCarousel} 
            playCarousel= {this.setTimerImage} />
            </>
        )
    }
}