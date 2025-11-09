import React, { useContext } from 'react'
import { motion } from 'motion/react'
import { WishlistContext } from '../../context/wishlistContext'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

export function Wishlist() {
  const wishlist = useContext(WishlistContext)
  const cart = useContext(CartContext)

  function handleAddToCart(product) {
    cart.addToCart(product, 1)
    wishlist.removeFromWishlist(product.id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaHeart className="text-5xl text-red-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#503217]">
              My Wishlist
            </h1>
          </div>
          <div className="h-1 w-32 bg-[#D3744A] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            {wishlist.wishlistItems.length} {wishlist.wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
          </p>
        </motion.div>

        {/* Wishlist Items or Empty State */}
        {wishlist.wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <FaHeart className="text-9xl text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-700 mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Add products you love to your wishlist!
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-4 bg-[#D3744A] text-white font-bold rounded-xl hover:bg-[#B86539] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Clear All Button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={wishlist.clearWishlist}
                className="flex items-center gap-2 px-6 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-semibold"
              >
                <MdDelete className="text-xl" />
                Clear All
              </button>
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.wishlistItems.map(function(product, index) {
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative group"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={function() {
                        wishlist.removeFromWishlist(product.id)
                      }}
                      className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-red-500 text-red-500 hover:text-white p-2 rounded-full transition-all duration-300 shadow-lg"
                    >
                      <FaTrash className="text-sm" />
                    </button>

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-[#D3744A] text-white px-3 py-1 rounded-lg shadow-lg z-10">
                        <p className="text-xs font-bold">{product.badge}</p>
                      </div>
                    )}

                    {/* Product Image */}
                    <Link to={`/ShopDetail/allProducts/${product.id}`}>
                      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`${product.imageSize} max-h-full object-contain`}
                        />
                      </div>
                    </Link>

                    {/* Product Info */}
                    <div className="p-4">
                      <Link to={`/ShopDetail/allProducts/${product.id}`}>
                        <h3 className="text-lg font-bold text-[#503217] mb-2 hover:text-[#D3744A] transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {product.categoryName}
                      </p>

                      {/* Price */}
                      {product.originalPrice ? (
                        <div className="flex items-center gap-2 mb-4">
                          <p className="text-xl font-bold text-green-600">
                            {product.price}
                          </p>
                          <p className="text-sm font-bold line-through text-red-400">
                            {product.originalPrice}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xl font-bold text-green-600 mb-4">
                          {product.price}
                        </p>
                      )}

                      {/* Add to Cart Button */}
                      <button
                        onClick={function() {
                          handleAddToCart(product)
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-[#D3744A] hover:bg-[#B86539] text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                      >
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}