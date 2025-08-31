import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/ShopPage.css";

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("customs");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  // Sample product data
  const categories = [
    {
      id: "customs",
      name: "Custom Designs",
      description: "Designing from scratch - create your unique piece",
      products: [
        {
          id: 1,
          name: "Bespoke Evening Gown",
          price: 450,
          image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Bestseller", "New"],
        },
        {
          id: 2,
          name: "Custom Tailored Suit",
          price: 550,
          image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
          tags: ["Popular"],
        },
        {
          id: 3,
          name: "Made-to-Measure Dress",
          price: 320,
          image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Limited"],
        },
      ],
    },
    {
      id: "recreation",
      name: "Style Recreation",
      description: "Copy your style inspiration - bring your ideas to life",
      products: [
        {
          id: 4,
          name: "Recreated Celebrity Gown",
          price: 380,
          image:
            "https://images.unsplash.com/photo-1566479174687-5c7a966c5dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Bestseller"],
        },
        {
          id: 5,
          name: "Vintage Style Recreation",
          price: 420,
          image:
            "https://images.unsplash.com/photo-1585487000124-4ed6350ae7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Popular"],
        },
        {
          id: 6,
          name: "Designer Inspired Dress",
          price: 360,
          image:
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["New"],
        },
      ],
    },
    {
      id: "refinement",
      name: "Professional Refinement",
      description: "Professional alterations - perfect your existing garments",
      products: [
        {
          id: 7,
          name: "Garment Restyling Service",
          price: 120,
          image:
            "https://images.unsplash.com/photo-1588850790165-4cf0006d4c3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Bestseller"],
        },
        {
          id: 8,
          name: "Premium Alteration Package",
          price: 85,
          image:
            "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Popular"],
        },
        {
          id: 9,
          name: "Bespoke Fitting Service",
          price: 65,
          image:
            "https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["New"],
        },
      ],
    },
  ];

  const accessories = [
    {
      id: "Dresses",
      name: "Made to Fit",
      products: [
        {
          id: 10,
          name: "Elegant Evening Dress",
          price: 120,
          image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          tags: ["New"],
        },
        {
          id: 11,
          name: "Chic Silk Top",
          price: 180,
          image:
            "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          tags: ["Bestseller"],
        },
        {
          id: 12,
          name: "Tailored Blazer",
          price: 95,
          image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
          tags: ["Popular"],
        },
      ],
    },
    {
      id: "Dresses",
      name: "Everyday Basics",
      products: [
        {
          id: 10,
          name: "V- neck basic top",
          price: 120,
          image:
            "https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9wfGVufDB8fDB8fHww",
          tags: ["New"],
        },
        {
          id: 11,
          name: "Chic Silk Top",
          price: 180,
          image:
            "https://images.unsplash.com/photo-1548778943-5bbeeb1ba6c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvcHxlbnwwfHwwfHx8MA%3D%3D",
          tags: ["Bestseller"],
        },
        {
          id: 12,
          name: "Tailored Blazer",
          price: 95,
          image:
            "https://images.unsplash.com/photo-1544450804-9e5f64cb18de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvcHxlbnwwfHwwfHx8MA%3D%3D",
          tags: ["Popular"],
        },
      ],
    },
    {
      id: "bags",
      name: "HandMade Bags",
      products: [
        {
          id: 10,
          name: "Evening Clutch",
          price: 120,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["New"],
        },
        {
          id: 11,
          name: "Designer Tote",
          price: 180,
          image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
          tags: ["Bestseller"],
        },
        {
          id: 12,
          name: "Crossbody Bag",
          price: 95,
          image:
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
          tags: ["Popular"],
        },
      ],
    },
    // {
    //   id: "shoes",
    //   name: "Footwear",
    //   products: [
    //     {
    //       id: 13,
    //       name: "Elegant Heels",
    //       price: 150,
    //       image:
    //         "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80",
    //       tags: ["New"],
    //     },
    //     {
    //       id: 14,
    //       name: "Designer Flats",
    //       price: 130,
    //       image:
    //         "https://images.unsplash.com/photo-1560072810-1cffb09fafa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    //       tags: ["Bestseller"],
    //     },
    //     {
    //       id: 15,
    //       name: "Evening Sandals",
    //       price: 110,
    //       image:
    //         "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=824&q=80",
    //       tags: ["Popular"],
    //     },
    //   ],
    // },
    {
      id: "jewelry",
      name: "Jewelry",
      products: [
        {
          id: 16,
          name: "Statement Necklace",
          price: 85,
          image:
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["New"],
        },
        {
          id: 17,
          name: "Gold Earrings",
          price: 65,
          image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Bestseller"],
        },
        {
          id: 18,
          name: "Designer Bracelet",
          price: 75,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
          tags: ["Popular"],
        },
      ],
    },
  ];

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <h1 className="page-title">ShopDebneQue</h1>
          <p className="page-subtitle">
            MADE TO FIT. EVERYDAY BASICS. HANDMADE BAGS. JEWELRY.
          </p>
        </div>
      </section>

      {/* <section className="shop-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-desc">{category.description}</span>
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{currentCategory.name}</h2>
            <p className="section-subtitle">{currentCategory.description}</p>
          </div>

          <div className="products-filter">
            <button
              className="filter-toggle"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Filters
            </button>

            <div className="sort-select">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className={`filter-panel ${isFilterOpen ? "open" : ""}`}>
            <div className="filter-group">
              <h3>Price Range</h3>
              <div className="price-range">
                <input type="range" min="0" max="1000" />
                <div className="range-values">
                  <span>$0</span>
                  <span>$1000</span>
                </div>
              </div>
            </div>

            <div className="filter-group">
              <h3>Tags</h3>
              <div className="tag-filters">
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Bestseller
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  New
                </label>
                <label className="filter-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Popular
                </label>
              </div>
            </div>

            <button className="apply-filters">Apply Filters</button>
          </div>

          <div className="products-grid">
            {currentCategory.products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-tags">
                    {product.tags.map((tag) => (
                      <span key={tag} className="product-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="product-actions">
                    <button className="quick-view">Quick View</button>
                    <button className="wishlist-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="accessories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Everyday Luxury</h2>
            <p className="section-subtitle">
              Tailored basics and accessories that elevate your daily style!
            </p>
          </div>

          <div className="accessories-tabs">
            {accessories.map((category) => (
              <div key={category.id} className="accessory-category">
                <h3 className="accessory-category-title">{category.name}</h3>
                <div className="accessories-grid">
                  {category.products.map((product) => (
                    <div key={product.id} className="accessory-card">
                      <div className="accessory-image-container">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="accessory-image"
                        />
                        <div className="accessory-tags">
                          {product.tags.map((tag) => (
                            <span key={tag} className="accessory-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="accessory-info">
                        <h4 className="accessory-name">{product.name}</h4>
                        <p className="accessory-price">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shop-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Our design team can create something unique just for you</p>
            <Link to="/custom-design" className="button primary-button">
              Start Custom Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
