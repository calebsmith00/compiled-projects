import React, { Component } from 'react'
import './styles/testimonies.css'

export default class Testimonies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stars: [1, 2, 3, 4, 5],
      testimonies: [
        { id: 0, userId: 0, photo: '../img/avatar_female.png', user: 'Ruby', stars: 5, review: 'Two Brothers have always done an excellent job for me and left my yard looking beautiful.'},
        { id: 1, userId: 1, photo: '../img/avatar_male.png', user: 'Jimmie', stars: 5, review: 'I’m so happy to have guys I can depend on.'},
        { id: 2, userId: 2, photo: '../img/avatar_male.png', user: 'Bill', stars: 5, review: 'Always a good job done right.'},
        { id: 3, userId: 3, photo: '../img/avatar_male.png', user: 'Bob and Deb', stars: 5, review: 'Two Brothers has been reliable, dependable and has always done a wonderful job for us.'},
        { id: 4, userId: 4, photo: '../img/avatar_female.png', user: 'Jenn', stars: 5, review: 'Two Brothers has always done a good job for me and at a price I could afford.'},
        { id: 5, userId: 5, user: 'Carlie', stars: 1, review: 'They\'ve always left me satisfied and smiling.'}        
      ]
    }
  }

  getStars = stars => {
    return this.state.stars.map(star => {
      if (star <= stars) return <i key={star} className="fa fa-star checked"></i>
      else return <i key={star} className= "fa fa-star"></i>
    })
  }

  render() {
    return (
      <div className="testimonies-container">
        <h1>Testimonials</h1> 
        <div className="reviews">
          {
            this.state.testimonies.map(review => {
              return (
                <div key={review.id} className="review-card">
                  
                  {/* <div id="stars">
                    <p>{this.getStars(review.stars)}</p>
                  </div> */}
                  <p className="description"><blockquote className="quote">{review.review}</blockquote></p>
                  <p className="reviewer">- {review.user}</p>                  
                </div>
              )
            })
          } 
        </div>       
      </div>
    )
  }
}
