// Enhanced Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane D.",
      text: "The custom dress was perfect for my event! The attention to detail was exceptional.",
      role: "Bride",
      rating: 5,
    },
    {
      name: "Mark S.",
      text: "High-quality materials and stunning designs. DEBNEQUE never disappoints.",
      role: "Fashion Influencer",
      rating: 5,
    },
    {
      name: "Lisa K.",
      text: "DEBNEQUE made my vision come to life! The fit was absolutely perfect.",
      role: "Corporate Client",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? "#FFD700" : "none"}
        stroke={i < rating ? "#FFD700" : "#FFD700"}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            The luxury experience speaks for itself
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
