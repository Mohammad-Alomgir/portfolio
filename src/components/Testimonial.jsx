const Testimonial = ({name,avatar,testimonial}) => {
    return (
      <div className='testimonial'>
        <div className="testimonial-icon">
          <img src={avatar} alt="person 1" />
          <h2>{name}</h2>
        </div>
        <div className="testimonial-info">
          <p>{testimonial}</p>
        </div>
      </div>
    )
  }
  
  export default Testimonial;