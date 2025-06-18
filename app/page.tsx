"use client"

import { useState } from "react"
import { SearchIcon } from "@/components/icons/search-icon"
import { HeartIcon } from "@/components/icons/heart-icon"
import { ShoppingBagIcon } from "@/components/icons/shopping-bag-icon"
import { UserIcon } from "@/components/icons/user-icon"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED")

  const products = [
    {
      id: 1,
      name: "WATER RESISTANT BACKPACK",
      price: "$45.00",
      originalPrice: "$60.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "SALE",
      rating: 4.5,
      reviewCount: 24,
    },
    {
      id: 2,
      name: "RUBBER DUCK STRESS TOY",
      price: "$12.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 5.0,
      reviewCount: 12,
    },
    {
      id: 3,
      name: "PREMIUM LEATHER WALLET",
      price: "$25.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "NEW",
      rating: 4.2,
      reviewCount: 8,
    },
    {
      id: 4,
      name: "WIRELESS HEADPHONES",
      price: "$35.00",
      originalPrice: "$45.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviewCount: 156,
    },
    {
      id: 5,
      name: "BACKPACK LARGE CAPACITY",
      price: "$55.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.3,
      reviewCount: 67,
    },
    {
      id: 6,
      name: "CERAMIC COFFEE MUG",
      price: "$28.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "POPULAR",
      rating: 4.7,
      reviewCount: 89,
    },
    {
      id: 7,
      name: "SMARTPHONE CASE",
      price: "$42.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.1,
      reviewCount: 34,
    },
    {
      id: 8,
      name: "DESK ORGANIZER SET",
      price: "$38.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviewCount: 45,
    },
    {
      id: 9,
      name: "TRAVEL WATER BOTTLE",
      price: "$45.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "ECO",
      rating: 4.4,
      reviewCount: 78,
    },
    {
      id: 10,
      name: "BLUETOOTH SPEAKER",
      price: "$32.00",
      originalPrice: "$40.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviewCount: 123,
    },
    {
      id: 11,
      name: "YOGA MAT PREMIUM",
      price: "$29.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviewCount: 56,
    },
    {
      id: 12,
      name: "LAPTOP SLEEVE",
      price: "$48.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "BESTSELLER",
      rating: 4.8,
      reviewCount: 234,
    },
    {
      id: 13,
      name: "PHONE STAND ADJUSTABLE",
      price: "$22.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.2,
      reviewCount: 67,
    },
    {
      id: 14,
      name: "NOTEBOOK SET",
      price: "$36.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.3,
      reviewCount: 23,
    },
    {
      id: 15,
      name: "WIRELESS CHARGER",
      price: "$41.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "FAST CHARGE",
      rating: 4.6,
      reviewCount: 89,
    },
    {
      id: 16,
      name: "CANVAS TOTE BAG",
      price: "$45.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviewCount: 45,
    },
    {
      id: 17,
      name: "STRESS RELIEF BALL",
      price: "$12.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.1,
      reviewCount: 12,
    },
    {
      id: 18,
      name: "DESK LAMP LED",
      price: "$33.00",
      originalPrice: "$42.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviewCount: 78,
    },
    {
      id: 19,
      name: "TRAVEL PILLOW",
      price: "$45.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "COMFORT",
      rating: 4.5,
      reviewCount: 67,
    },
    {
      id: 20,
      name: "HIKING BACKPACK",
      price: "$55.00",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviewCount: 134,
    },
    {
      id: 21,
      name: "PORTABLE CHARGER",
      price: "$39.00",
      image: "/placeholder.svg?height=300&width=300",
      badge: "POWER",
      rating: 4.6,
      reviewCount: 98,
    },
  ]

  // Helper function to render stars
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>,
      )
    }

    return stars
  }

  const toggleFooterSection = (sectionId) => {
    if (window.innerWidth <= 768) {
      const section = document.getElementById(sectionId)
      const toggle = section.previousElementSibling.querySelector(".footer-toggle")

      if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block"
        toggle.textContent = "-"
      } else {
        section.style.display = "none"
        toggle.textContent = "+"
      }
    }
  }

  const toggleFilterSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    const toggle = section.previousElementSibling.querySelector(".filter-dropdown-icon")

    if (section.style.display === "none" || section.style.display === "") {
      section.style.display = "block"
      toggle.textContent = "-"
    } else {
      section.style.display = "none"
      toggle.textContent = "+"
    }
  }

  return (
    <div className="page-container">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-text">Free shipping on orders over $50 | Use code: FREESHIP</span>
        </div>
      </div>
      {/* Header */}
      <header className="header">
        {/* First Row - Logo, LOGO text, Icons */}
        <div className="header-top">
          <div className="header-top-content">
            <div className="header-left-icons">
              <div className="icon">
                <img src="/icons/menu.svg" alt="Menu" width={20} height={20} />
              </div>
              <div className="icon">
                <img src="/icons/grid.svg" alt="Grid" width={20} height={20} />
              </div>
            </div>
            <div className="logo-icon">
              <img src="/logo.svg" alt="Logo" width={32} height={32} />
            </div>
            <div className="logo-text">LOGO</div>
            <div className="header-icons">
              <div className="icon">
                <SearchIcon />
              </div>
              <div className="icon">
                <HeartIcon />
              </div>
              <div className="icon">
                <ShoppingBagIcon />
              </div>
              <div className="icon">
                <UserIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Navigation (Desktop Only) */}
        <div className="header-bottom">
          <div className="header-bottom-content">
            <nav className="nav">
              <a href="#" className="nav-link">
                SHOP
              </a>
              <a href="#" className="nav-link">
                SKILLS
              </a>
              <a href="#" className="nav-link">
                STORIES
              </a>
              <a href="#" className="nav-link">
                ABOUT
              </a>
              <a href="#" className="nav-link">
                CONTACT US
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Breadcrumb (Mobile Only) */}
        <div className="breadcrumb">
          <span className="breadcrumb-item">HOME</span>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-item active">SHOP</span>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">DISCOVER OUR PRODUCTS</h1>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </section>

        {/* Filters and Products Container */}
        <div className={`filters-container ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          {/* Filters Sidebar */}
          <div className={`filters ${sidebarOpen ? "visible" : "hidden"}`}>
            <div className="filter-section">
              <div className="filter-header-dropdown" onClick={() => toggleFilterSection("occasion")}>
                <h3>OCCASION</h3>
                <span className="filter-dropdown-icon">+</span>
              </div>
              <div className="filter-content" id="occasion">
                <div className="filter-options">
                  <label>
                    <input type="checkbox" /> Casual
                  </label>
                  <label>
                    <input type="checkbox" /> Formal
                  </label>
                  <label>
                    <input type="checkbox" /> Party
                  </label>
                  <label>
                    <input type="checkbox" /> Wedding
                  </label>
                  <label>
                    <input type="checkbox" /> Business
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header-dropdown" onClick={() => toggleFilterSection("work")}>
                <h3>WORK</h3>
                <span className="filter-dropdown-icon">+</span>
              </div>
              <div className="filter-content" id="work">
                <div className="filter-options">
                  <label>
                    <input type="checkbox" /> Office
                  </label>
                  <label>
                    <input type="checkbox" /> Remote
                  </label>
                  <label>
                    <input type="checkbox" /> Field Work
                  </label>
                  <label>
                    <input type="checkbox" /> Creative
                  </label>
                  <label>
                    <input type="checkbox" /> Healthcare
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header-dropdown" onClick={() => toggleFilterSection("fabric")}>
                <h3>FABRIC</h3>
                <span className="filter-dropdown-icon">+</span>
              </div>
              <div className="filter-content" id="fabric">
                <div className="filter-options">
                  <label>
                    <input type="checkbox" /> Cotton
                  </label>
                  <label>
                    <input type="checkbox" /> Polyester
                  </label>
                  <label>
                    <input type="checkbox" /> Silk
                  </label>
                  <label>
                    <input type="checkbox" /> Wool
                  </label>
                  <label>
                    <input type="checkbox" /> Linen
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header-dropdown" onClick={() => toggleFilterSection("segment")}>
                <h3>SEGMENT</h3>
                <span className="filter-dropdown-icon">+</span>
              </div>
              <div className="filter-content" id="segment">
                <div className="filter-options">
                  <label>
                    <input type="checkbox" /> Premium
                  </label>
                  <label>
                    <input type="checkbox" /> Mid-Range
                  </label>
                  <label>
                    <input type="checkbox" /> Budget
                  </label>
                  <label>
                    <input type="checkbox" /> Luxury
                  </label>
                  <label>
                    <input type="checkbox" /> Economy
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="products-section">
            <div className="products-header">
              <div className="products-header-left">
                <span className="items-count desktop-only">3425 ITEMS</span>
                <button className="hide-filter-btn desktop-only" onClick={() => setSidebarOpen(!sidebarOpen)}>
                  <span className="arrow-left">{sidebarOpen ? "←" : "→"}</span>
                  {sidebarOpen ? "HIDE FILTER" : "SHOW FILTER"}
                </button>
                <button className="mobile-filter-btn mobile-only" onClick={() => setSidebarOpen(!sidebarOpen)}>
                  FILTER
                </button>
              </div>
              <div className="sort-dropdown-container">
                <button className="sort-dropdown-btn" onClick={() => setSortDropdownOpen(!sortDropdownOpen)}>
                  {selectedSort}
                  <span className="dropdown-arrow">▼</span>
                </button>
                {sortDropdownOpen && (
                  <div className="sort-dropdown-menu">
                    <div
                      className={`sort-option ${selectedSort === "RECOMMENDED" ? "selected" : ""}`}
                      onClick={() => {
                        setSelectedSort("RECOMMENDED")
                        setSortDropdownOpen(false)
                      }}
                    >
                      {selectedSort === "RECOMMENDED" && <span className="checkmark">✓</span>}
                      RECOMMENDED
                    </div>
                    <div
                      className="sort-option"
                      onClick={() => {
                        setSelectedSort("NEWEST FIRST")
                        setSortDropdownOpen(false)
                      }}
                    >
                      NEWEST FIRST
                    </div>
                    <div
                      className="sort-option"
                      onClick={() => {
                        setSelectedSort("POPULAR")
                        setSortDropdownOpen(false)
                      }}
                    >
                      POPULAR
                    </div>
                    <div
                      className="sort-option"
                      onClick={() => {
                        setSelectedSort("PRICE : HIGH TO LOW")
                        setSortDropdownOpen(false)
                      }}
                    >
                      PRICE : HIGH TO LOW
                    </div>
                    <div
                      className="sort-option"
                      onClick={() => {
                        setSelectedSort("PRICE : LOW TO HIGH")
                        setSortDropdownOpen(false)
                      }}
                    >
                      PRICE : LOW TO HIGH
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={`products-grid ${sidebarOpen ? "grid-3-cols" : "grid-4-cols"}`}>
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image || "/placeholder.svg"} alt={product.name} />
                    {product.badge && <div className="product-badge">{product.badge}</div>}
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-signin-row">
                      <span className="signin-message">Sign in to view the product price</span>
                      <button className="like-btn" title="Like">
                        ♡
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        {/* Footer Top Row */}
        <div className="footer-top">
          <div className="footer-top-content">
            <div className="footer-newsletter">
              <h3>GET THE LATEST UPDATES</h3>
              <p>Subscribe to our newsletter and get the latest updates on our products and services.</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" className="newsletter-input" />
                <button className="newsletter-btn">SUBSCRIBE</button>
              </div>
            </div>

            <div className="footer-contact">
              <h3>CONTACT US</h3>
              <p>
                123 Main Street
                <br />
                City, State 12345
                <br />
                Phone: (555) 123-4567
                <br />
                Email: info@company.com
              </p>
            </div>

            <div className="footer-currency">
              <h3>CURRENCY</h3>
              <select className="currency-select">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
                <option>CAD - Canadian Dollar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row - 3 Columns */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-column">
              <div className="footer-column-header" onClick={() => toggleFooterSection("quick-links")}>
                <h3>QUICK LINKS</h3>
                <span className="footer-toggle">+</span>
              </div>
              <ul className="footer-links" id="quick-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Shipping Info</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <div className="footer-column-header" onClick={() => toggleFooterSection("categories")}>
                <h3>CATEGORIES</h3>
                <span className="footer-toggle">+</span>
              </div>
              <ul className="footer-links" id="categories">
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Clothing</a>
                </li>
                <li>
                  <a href="#">Home & Garden</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Books</a>
                </li>
                <li>
                  <a href="#">Toys</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <div className="footer-column-header" onClick={() => toggleFooterSection("follow-us")}>
                <h3>FOLLOW US</h3>
                <span className="footer-toggle">+</span>
              </div>
              <div className="footer-links social-links" id="follow-us">
                <a href="#" className="social-link">
                  Facebook
                </a>
                <a href="#" className="social-link">
                  Twitter
                </a>
                <a href="#" className="social-link">
                  Instagram
                </a>
                <a href="#" className="social-link">
                  LinkedIn
                </a>
                <a href="#" className="social-link">
                  YouTube
                </a>
                <a href="#" className="social-link">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
