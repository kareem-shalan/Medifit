import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import data from '../../data.json'
import { BsEyeFill, BsSearch } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { MdClear } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { WishlistContext } from '../../context/wishlistContext'

export function Shop() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [LinkActive, setLinkActive] = useState(null)
  const [priceFilter, setPriceFilter] = useState('all')
  const wishlist = useContext(WishlistContext)

  useEffect(() => {
    // Load all products
    setProducts(data?.allProducts || [])
    setFilteredProducts(data?.allProducts || [])
  }, [])

  useEffect(() => {
    // Filter products based on category, search, and price
    let filtered = products

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.categoryId === parseInt(selectedCategory)
      )
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Price filter
    if (priceFilter === 'low-high') {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', '').replace(' USD', ''))
        const priceB = parseFloat(b.price.replace('$', '').replace(' USD', ''))
        return priceA - priceB
      })
    } else if (priceFilter === 'high-low') {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', '').replace(' USD', ''))
        const priceB = parseFloat(b.price.replace('$', '').replace(' USD', ''))
        return priceB - priceA
      })
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, searchQuery, products, priceFilter])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSearchQuery('')
    setPriceFilter('all')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#503217] mb-4">
            Our Medical Shop
          </h1>
          <div className="h-1 w-32 bg-[#D3744A] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our extensive collection of quality medical products and health supplies
          </p>
        </motion.div>

        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <FiFilter className="text-2xl text-[#D3744A]" />
            <h2 className="text-2xl font-bold text-[#503217]">Filters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Products
              </label>
              <div className="relative">
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="all">All Categories</option>
                {data?.categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Sort by Price
              </label>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D3744A] focus:outline-none transition-colors cursor-pointer"
              >
                <option value="all">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(selectedCategory !== 'all' || searchQuery || priceFilter !== 'all') && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={clearFilters}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
            >
              <MdClear />
              Clear All Filters
            </motion.button>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-[#503217]">{filteredProducts.length}</span> of{' '}
            <span className="font-bold text-[#503217]">{products.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key="products-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() =>
                    setLinkActive(LinkActive === product.id ? null : product.id)
                  }
                  className="group  h-[350px] flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#D3744A] text-white px-3 py-1 rounded-lg shadow-lg z-10">
                      <p className="text-xs font-bold">{product.badge}</p>
                    </div>
                  )}

                  {/* Category Tag */}
                  <div className="absolute bottom-[50%] translate-y-1/2 right-4 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg z-10">
                    <p className="text-xs font-semibold">{product.categoryName}</p>
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={function(e) {
                      e.stopPropagation()
                      wishlist.toggleWishlist(product)
                    }}
                    className={`absolute top-0 left-[90%] transform -translate-x-1/2 ${
                      wishlist.isInWishlist(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-red-500'
                    } p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-10`}
                  >
                    <FaHeart className={`text-lg ${wishlist.isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  </button>

                  {/* Product Image */}
                  <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      className={`${product.imageSize} w-[100px] max-h-[110px] object-contain transition-transform duration-300 group-hover:scale-110 ${product.extraClasses}`}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-[#503217] mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    {/* Price */}
                    {product.originalPrice ? (
                      <div className="flex items-center gap-2 mb-3">
                        <p className="text-xl font-bold text-green-600">
                          {product.price}
                        </p>
                        <p className="text-sm font-bold line-through text-red-400">
                          {product.originalPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xl font-bold text-green-600 mb-3">
                        {product.price}
                      </p>
                    )}

                    {/* View Button */}
                    <Link
                      to={`/ShopDetail/allProducts/${product.id}`}
                      className={`w-full flex items-center justify-center gap-2 rounded-lg text-white py-3 bg-[#D3744A] transition-all duration-300 transform
                        ${LinkActive === product.id 
                          ? 'scale-105 shadow-lg' 
                          : 'group-hover:scale-105 group-hover:shadow-lg'
                        }`}
                    >
                      <BsEyeFill className="text-lg" />
                      <span className="font-semibold">View Details</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-[#D3744A] text-white rounded-lg hover:bg-[#B86539] transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}