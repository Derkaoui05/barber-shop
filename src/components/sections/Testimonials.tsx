import React from 'react'

function Testimonials() {
  return (
    <div>
      <div className='testimonial'>
        <div className='testimonial__container container grid'>
          <div className='testimonial__data'>
            <h2 className='section__title'>Testimonials</h2>
            <p className='section__subtitle'>What my clients say about me</p>
          </div>
          <div className='testimonial__content grid'>
            <div className='testimonial__card'>
              <div className='testimonial__header'>
                <img src='assets/img/testimonial-1.jpg' alt='' className='testimonial__img' />
                <div>
                  <h3 className='testimonial__name'>John Doe</h3>
                  <span className='testimonial__profession'>Frontend Developer</span>
                </div>
              </div>
              <p className='testimonial__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, sapiente.
              </p>
            </div>
            <div className='testimonial__card'>
              <div className='testimonial__header'>
                <img src='assets/img/testimonial-2.jpg' alt='' className='testimonial__img' />
                <div>
                  <h3 className='testimonial__name'>Jane Doe</h3>
                  <span className='testimonial__profession'>Backend Developer</span>
                </div>
              </div>
              <p className='testimonial__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, sapiente.
              </p>
            </div>
            <div className='testimonial__card'>
              <div className='testimonial__header'>
                <img src='assets/img/testimonial-3.jpg' alt='' className='testimonial__img' />
                <div>
                  <h3 className='testimonial__name'>John Smith</h3>
                  <span className='testimonial__profession'>Fullstack Developer</span>
                </div>
              </div>
              <p className='testimonial__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials