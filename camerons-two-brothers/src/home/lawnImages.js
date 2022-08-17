import React, { Component } from 'react'
import './styles/lawnImages.css'

export default class lawnImages extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      images: [],
      activeImage: {}
    }
  }

  // Grab paths to lawn images
  componentDidMount() {
    fetch('/api/getLawnImages')
      .then(res => res.json())
      .then(data => { 
        // Validate array exists in state
        if (!this.state.images) this.setState({ images: [] })
        // Grab the middle image and select that as the active image
        let dataLength = Math.round(data.length/2)
        data[dataLength].active = true
        data[dataLength].activeStyle = 'active'
        data[dataLength].visibility = 'visible'
        this.setState({
          images: data,
          activeImage: data[dataLength]
        })
      })
  }

  handleClick = (direction, bulletPointID) => {
    // Grab active image and figure out where to position the bullet points
    let activeImage = this.state.activeImage
    let imageArrayLength = this.state.images.length
    let newImagePosition = (activeImage.id)+direction
    if (direction === null) {
      newImagePosition = bulletPointID
    }
    // Check if user is attempting to view images outside of the given array's length.
    // If array is in bounds, update active elements to help the user navigate
    if (newImagePosition >= 1 && newImagePosition <= imageArrayLength) {
      let images = this.state.images
      
      images[activeImage.id-1].active = false
      images[activeImage.id-1].visibility = 'hidden'
      images[activeImage.id-1].activeStyle = 'inactive'

      images[newImagePosition-1].active = true
      images[newImagePosition-1].visibility = 'visible'
      images[newImagePosition-1].activeStyle = 'active'
      
      activeImage = images[newImagePosition-1]

      console.log(images)
      this.setState({
        images, activeImage
      })
    }
  }

  bulletPointClick = id => {
    // Grab a duplicate array of images and update the state
    // in order to handle bullet point navigation
    let images = this.state.images
    let activeImageID = this.state.activeImage.id-1

    // Sets the currently selected image as inactive
    images[activeImageID].active = false
    images[activeImageID].visibility = 'hidden'
    images[activeImageID].activeStyle = 'inactive'

    // Sets the clicked bulleted point to active
    images[id-1].active = true
    images[id-1].visibility = 'hidden'
    images[id-1].activeStyle = 'active'

    console.log(images)
    let activeImage = images[id-1]

    this.setState({
      images, activeImage
    })
  }

  render() {
    let {images} = this.state
    return (
      <div className="images-container">
 
        {/* Lawn Images */}
        <div className="images">
          {
            images.map(image => {
              let active = image.activeStyle
              return (
                <img 
                  key={image.id}
                  alt="Lawns that we mow!" 
                  className={`image image-${active}`} 
                  src={image.path}
                />
              )
            })
          }
        </div>

        {/* Left arrow */}
        <div id="container-left">
          <div onClick={() => this.handleClick(-1)} className="arrow-left">
            <p id="left-facing">{'<'}</p>
          </div>
        </div>

        {/* Right arrow */}
        <div id="container-right">
          <div onClick={() => this.handleClick(1)} className="arrow-right">
            <p id="right-facing">{'>'}</p>
          </div>
        </div>
        
        {/* Bullet Point Navigation */}
        <p id="image-descriptor">What we've done</p>
        <div id="bullet-point-container">
          <ul id="image-bulleted-navigation">
            {this.state.images.map(image => {
              return (
                <li key={image.id} id={image.id} className={`image-bullet active-${image.active}`} onClick={(e) => this.bulletPointClick(e.target.id)}></li>
              )
            })}
          </ul>
        </div>

      </div>
    )
  }
}
