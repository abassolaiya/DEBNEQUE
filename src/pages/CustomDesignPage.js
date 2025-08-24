import { useState } from "react";
import "../styles/CustomDesignPage.css";

const CustomDesignPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [designType, setDesignType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fabric, setFabric] = useState("");
  const [style, setStyle] = useState("");
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    length: "",
  });
  const [designDetails, setDesignDetails] = useState("");
  const [referenceImages, setReferenceImages] = useState([]);
  const [timeline, setTimeline] = useState("");

  const designTypes = [
    {
      id: "custom",
      title: "Custom Design",
      description: "Create something completely unique from scratch",
      icon: "🎨",
    },
    {
      id: "recreation",
      title: "Style Recreation",
      description: "Recreate a design you've seen elsewhere",
      icon: "👗",
    },
    {
      id: "refinement",
      title: "Garment Refinement",
      description: "Alter or improve an existing garment",
      icon: "✂️",
    },
  ];

  const categories = [
    { id: "dresses", name: "Dresses", icon: "👗" },
    { id: "tops", name: "Tops", icon: "👚" },
    { id: "bottoms", name: "Bottoms", icon: "👖" },
    { id: "outerwear", name: "Outerwear", icon: "🧥" },
    { id: "suits", name: "Suits", icon: "👔" },
    { id: "accessories", name: "Accessories", icon: "👜" },
  ];

  const fabrics = [
    { id: "silk", name: "Silk", price: "+$80" },
    { id: "cotton", name: "Cotton", price: "+$20" },
    { id: "linen", name: "Linen", price: "+$40" },
    { id: "wool", name: "Wool", price: "+$60" },
    { id: "velvet", name: "Velvet", price: "+$70" },
    { id: "lace", name: "Lace", price: "+$90" },
  ];

  const styles = [
    { id: "classic", name: "Classic" },
    { id: "modern", name: "Modern" },
    { id: "bohemian", name: "Bohemian" },
    { id: "minimalist", name: "Minimalist" },
    { id: "vintage", name: "Vintage" },
    { id: "avantgarde", name: "Avant-Garde" },
  ];

  const timelines = [
    { id: "2weeks", name: "2 Weeks", price: "+$100" },
    { id: "3weeks", name: "3 Weeks", price: "+$50" },
    { id: "4weeks", name: "4 Weeks", price: "Standard" },
    { id: "6weeks", name: "6+ Weeks", price: "-$50" },
  ];

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setReferenceImages([...referenceImages, ...files]);
  };

  const removeImage = (index) => {
    const newImages = [...referenceImages];
    newImages.splice(index, 1);
    setReferenceImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to your backend
    alert(
      "Your custom design request has been submitted! Our team will contact you soon."
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="design-type-step">
            <h2>What type of design are you looking for?</h2>
            <p className="step-description">
              Select the option that best describes your needs
            </p>
            <div className="design-type-grid">
              {designTypes.map((type) => (
                <div
                  key={type.id}
                  className={`design-type-card ${
                    designType === type.id ? "selected" : ""
                  }`}
                  onClick={() => setDesignType(type.id)}
                >
                  <div className="design-type-icon">{type.icon}</div>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="category-step">
            <h2>What would you like us to create?</h2>
            <p className="step-description">
              Select a category for your custom design
            </p>
            <div className="category-grid">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`category-card ${
                    selectedCategory === category.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="materials-step">
            <h2>Select your materials and style</h2>
            <p className="step-description">
              Choose fabrics and styles that match your vision
            </p>

            <div className="materials-section">
              <h3>Fabric Selection</h3>
              <div className="fabric-grid">
                {fabrics.map((fabricItem) => (
                  <div
                    key={fabricItem.id}
                    className={`fabric-card ${
                      fabric === fabricItem.id ? "selected" : ""
                    }`}
                    onClick={() => setFabric(fabricItem.id)}
                  >
                    <span className="fabric-name">{fabricItem.name}</span>
                    <span className="fabric-price">{fabricItem.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="style-section">
              <h3>Style Preference</h3>
              <div className="style-grid">
                {styles.map((styleItem) => (
                  <div
                    key={styleItem.id}
                    className={`style-card ${
                      style === styleItem.id ? "selected" : ""
                    }`}
                    onClick={() => setStyle(styleItem.id)}
                  >
                    {styleItem.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="measurements-step">
            <h2>Provide your measurements</h2>
            <p className="step-description">
              Enter your measurements for a perfect fit (all in inches)
            </p>

            <div className="measurements-grid">
              <div className="measurement-input">
                <label htmlFor="bust">Bust</label>
                <input
                  type="number"
                  id="bust"
                  value={measurements.bust}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, bust: e.target.value })
                  }
                  placeholder="0"
                />
              </div>

              <div className="measurement-input">
                <label htmlFor="waist">Waist</label>
                <input
                  type="number"
                  id="waist"
                  value={measurements.waist}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, waist: e.target.value })
                  }
                  placeholder="0"
                />
              </div>

              <div className="measurement-input">
                <label htmlFor="hips">Hips</label>
                <input
                  type="number"
                  id="hips"
                  value={measurements.hips}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, hips: e.target.value })
                  }
                  placeholder="0"
                />
              </div>

              <div className="measurement-input">
                <label htmlFor="length">Length</label>
                <input
                  type="number"
                  id="length"
                  value={measurements.length}
                  onChange={(e) =>
                    setMeasurements({ ...measurements, length: e.target.value })
                  }
                  placeholder="0"
                />
              </div>
            </div>

            <div className="timeline-section">
              <h3>Desired Timeline</h3>
              <div className="timeline-grid">
                {timelines.map((time) => (
                  <div
                    key={time.id}
                    className={`timeline-card ${
                      timeline === time.id ? "selected" : ""
                    }`}
                    onClick={() => setTimeline(time.id)}
                  >
                    <span className="timeline-name">{time.name}</span>
                    <span className="timeline-price">{time.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="final-details-step">
            <h2>Final details</h2>
            <p className="step-description">
              Share any additional information and reference images
            </p>

            <div className="details-section">
              <label htmlFor="designDetails">Design Details</label>
              <textarea
                id="designDetails"
                value={designDetails}
                onChange={(e) => setDesignDetails(e.target.value)}
                placeholder="Describe your design in detail, including colors, patterns, neckline, sleeve style, etc."
                rows="5"
              />
            </div>

            <div className="reference-section">
              <h3>Reference Images</h3>
              <p>Upload images that inspire your design (max 5 images)</p>

              <div className="image-upload-area">
                <label htmlFor="referenceImages" className="image-upload-label">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM8 15.01L9.41 16.42L11 14.84V18H13V14.84L14.59 16.43L16 15.01L12.01 11L8 15.01Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Click to upload images</span>
                  <input
                    type="file"
                    id="referenceImages"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
              </div>

              {referenceImages.length > 0 && (
                <div className="uploaded-images">
                  {referenceImages.map((image, index) => (
                    <div key={index} className="image-preview">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Reference ${index + 1}`}
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="remove-image"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="custom-design-page">
      <section className="design-hero">
        <div className="container">
          <h1>Create Your Custom Design</h1>
          <p>
            Bring your fashion vision to life with our bespoke design service
          </p>
        </div>
      </section>

      <div className="design-process">
        <div className="container">
          <div className="progress-bar">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              ></div>
            </div>
            <div className="step-indicators">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`step-indicator ${
                    currentStep >= step ? "active" : ""
                  }`}
                >
                  <span className="step-number">{step}</span>
                  <span className="step-label">
                    {step === 1 && "Type"}
                    {step === 2 && "Category"}
                    {step === 3 && "Materials"}
                    {step === 4 && "Measurements"}
                    {step === 5 && "Details"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="design-form">
            <div className="form-step">{renderStep()}</div>

            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="nav-button prev-button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="nav-button next-button"
                  disabled={
                    (currentStep === 1 && !designType) ||
                    (currentStep === 2 && !selectedCategory) ||
                    (currentStep === 3 && (!fabric || !style)) ||
                    (currentStep === 4 &&
                      (!measurements.bust ||
                        !measurements.waist ||
                        !measurements.hips ||
                        !timeline))
                  }
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <button type="submit" className="nav-button submit-button">
                  Submit Design Request
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <section className="design-benefits">
        <div className="container">
          <h2>Why Choose Our Custom Design Service?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎨</div>
              <h3>Unique Designs</h3>
              <p>
                Create one-of-a-kind pieces that reflect your personal style and
                vision.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✂️</div>
              <h3>Expert Craftsmanship</h3>
              <p>
                Our skilled designers bring years of experience and attention to
                detail.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📏</div>
              <h3>Perfect Fit</h3>
              <p>Custom measurements ensure your garment fits you perfectly.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💎</div>
              <h3>Premium Materials</h3>
              <p>
                Choose from high-quality fabrics and materials for your
                creation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomDesignPage;
