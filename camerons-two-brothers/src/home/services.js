import React, { Component } from 'react'
import './styles/services.css'

export default class services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      services: [
        {id: 1, title: 'Lawn Mowing', features: ['Trimming perimeters', 'Precision edging'], description: 'We can mow lawns of any size, from small houses to large businesses. Here\'s a list of what we have to offer:'},
        {id: 2, title: 'Lawn Care', features: ['Fertilizing', 'Overseeding'], description: 'We provide a variety of lawn care services to keep your yard in tip top shape. Below is a list of lawn care services we provide:'},
        {id: 3, title: 'Other Services', features: ['Leaf removal', 'Rain gutter cleaning'], description: 'Lawn care is our speciality. Please feel free to reach out with any lawn requests, no matter how big or small it may seem. Some of these services may include:'}
      ]
    }
  }

  render() {
    return (
      <div className="features-container">
        <div className="features-bg"></div>
        <h1>Our Services</h1>
        <div className="features-list">
          {
            this.state.services.map(service => {
              return (
                <div className="card" key={service.id}>
                  <p className="card-header">{service.title}</p>
                  <p className="card-separator" />
                  <div className="card-details">
                    <ul>
                      {
                        service.features.map((feature, index) => (
                          <li key={index} className="feature">{feature}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>
        <p id="serviceArea">We service Greater Wichita, Maize, Park City, and Bel Aire.</p>
      </div>
    )
  }
}
