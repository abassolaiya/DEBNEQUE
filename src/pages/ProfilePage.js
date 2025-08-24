import { useState } from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [editMode, setEditMode] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: "Eleanor",
    lastName: "Rigby",
    email: "eleanor@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "1990-05-15",
    address: {
      street: "123 Fashion Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    measurements: {
      bust: "36",
      waist: "28",
      hips: "38",
      height: "5'7\"",
    },
  });

  const orders = [
    {
      id: "ORD-12345",
      date: "2023-10-15",
      status: "Delivered",
      items: [
        {
          name: "Custom Evening Gown",
          price: 450,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        },
      ],
      total: 450,
    },
    {
      id: "ORD-12346",
      date: "2023-09-22",
      status: "In Production",
      items: [
        {
          name: "Bespoke Tailored Suit",
          price: 550,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
        },
        {
          name: "Silk Scarf",
          price: 85,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1591369822096-ffd140ec948a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        },
      ],
      total: 635,
    },
    {
      id: "ORD-12347",
      date: "2023-08-05",
      status: "Completed",
      items: [
        {
          name: "Summer Dress",
          price: 220,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1566479174687-5c7a966c5dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        },
      ],
      total: 220,
    },
  ];

  const wishlistItems = [
    {
      id: 1,
      name: "Gold Statement Necklace",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      category: "Jewelry",
    },
    {
      id: 2,
      name: "Designer Handbag",
      price: 280,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      category: "Bags",
    },
    {
      id: 3,
      name: "Evening Clutch",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      category: "Bags",
    },
  ];

  const appointments = [
    {
      id: 1,
      date: "2023-11-20",
      time: "2:00 PM",
      type: "Fitting Session",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2023-11-05",
      time: "10:30 AM",
      type: "Design Consultation",
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-12-15",
      time: "11:00 AM",
      type: "Final Fitting",
      status: "Scheduled",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setProfileData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setProfileData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // In a real app, you would save to backend here
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div className="tab-content">
            <h2>Order History</h2>
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <div className="order-info">
                      <span className="order-id">Order #{order.id}</span>
                      <span className="order-date">
                        {new Date(order.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="order-status">
                      <span
                        className={`status-badge ${order.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>

                  <div className="order-items">
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="item-image"
                        />
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="item-price">${item.price}</div>
                      </div>
                    ))}
                  </div>

                  <div className="order-footer">
                    <div className="order-total">
                      <strong>Total: ${order.total}</strong>
                    </div>
                    <div className="order-actions">
                      <button className="action-button">View Details</button>
                      <button className="action-button">Reorder</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "wishlist":
        return (
          <div className="tab-content">
            <h2>Your Wishlist</h2>
            <div className="wishlist-grid">
              {wishlistItems.map((item) => (
                <div key={item.id} className="wishlist-item">
                  <div className="wishlist-image">
                    <img src={item.image} alt={item.name} />
                    <button className="wishlist-remove">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="wishlist-add-to-cart">
                      Add to Cart
                    </button>
                  </div>
                  <div className="wishlist-details">
                    <span className="item-category">{item.category}</span>
                    <h4>{item.name}</h4>
                    <p className="item-price">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "appointments":
        return (
          <div className="tab-content">
            <div className="appointments-header">
              <h2>Your Appointments</h2>
              <button className="button primary-button">
                Schedule New Appointment
              </button>
            </div>
            <div className="appointments-list">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="appointment-card">
                  <div className="appointment-date">
                    <span className="date-day">
                      {new Date(appointment.date).getDate()}
                    </span>
                    <span className="date-month">
                      {new Date(appointment.date).toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div className="appointment-details">
                    <h4>{appointment.type}</h4>
                    <p>
                      {appointment.time} •{" "}
                      {new Date(appointment.date).toLocaleDateString()}
                    </p>
                    <span
                      className={`status-badge ${appointment.status.toLowerCase()}`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                  <div className="appointment-actions">
                    <button className="action-button">Reschedule</button>
                    <button className="action-button">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="tab-content">
            <div className="profile-header">
              <h2>Personal Information</h2>
              {!editMode ? (
                <button
                  className="button outline-button"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button
                    className="button secondary-button"
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="button primary-button"
                    onClick={handleSaveProfile}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            <div className="profile-form">
              <div className="form-section">
                <h3>Basic Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Birthday</label>
                  <input
                    type="date"
                    name="birthday"
                    value={profileData.birthday}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Address</h3>
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="address.street"
                    value={profileData.address.street}
                    onChange={handleInputChange}
                    disabled={!editMode}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="address.city"
                      value={profileData.address.city}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      name="address.state"
                      value={profileData.address.state}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      name="address.zipCode"
                      value={profileData.address.zipCode}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      name="address.country"
                      value={profileData.address.country}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Measurements</h3>
                <p className="section-description">
                  Your measurements help us create perfectly fitted garments.
                </p>

                <div className="form-row">
                  <div className="form-group">
                    <label>Bust (in)</label>
                    <input
                      type="number"
                      name="measurements.bust"
                      value={profileData.measurements.bust}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="form-group">
                    <label>Waist (in)</label>
                    <input
                      type="number"
                      name="measurements.waist"
                      value={profileData.measurements.waist}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Hips (in)</label>
                    <input
                      type="number"
                      name="measurements.hips"
                      value={profileData.measurements.hips}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                  <div className="form-group">
                    <label>Height</label>
                    <input
                      type="text"
                      name="measurements.height"
                      value={profileData.measurements.height}
                      onChange={handleInputChange}
                      disabled={!editMode}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1>Your Profile</h1>
          <p>Manage your account, orders, and preferences</p>
        </div>

        <div className="profile-layout">
          <div className="profile-sidebar">
            <div className="user-card">
              <div className="user-avatar">
                <span>
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </span>
              </div>
              <div className="user-info">
                <h3>
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p>{profileData.email}</p>
              </div>
            </div>

            <nav className="profile-nav">
              <button
                className={`nav-item ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => setActiveTab("orders")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 12H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 16H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Orders
              </button>

              <button
                className={`nav-item ${
                  activeTab === "wishlist" ? "active" : ""
                }`}
                onClick={() => setActiveTab("wishlist")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Wishlist
                <span className="nav-badge">{wishlistItems.length}</span>
              </button>

              <button
                className={`nav-item ${
                  activeTab === "appointments" ? "active" : ""
                }`}
                onClick={() => setActiveTab("appointments")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Appointments
              </button>

              <button
                className={`nav-item ${
                  activeTab === "profile" ? "active" : ""
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Profile Settings
              </button>
            </nav>
          </div>

          <div className="profile-content">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
