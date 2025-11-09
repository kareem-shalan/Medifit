import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react';
import data from '../../data.json'
import { GiFastBackwardButton } from 'react-icons/gi';
import { BsEyeFill } from 'react-icons/bs';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { CartContext } from '../../context/cartContext';
import { WishlistContext } from '../../context/wishlistContext';

export function ShopDetail() {
  const { id, type } = useParams()
  const [curentProduct, setcurentProduct] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const cart = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const wishlist = useContext(WishlistContext)
  const isWishlisted = wishlist.isInWishlist(curentProduct?.id)

  console.log(type, "typesssssssssssssss");


  useEffect(() => {
    const product = data?.[type]?.find(product => product.id === parseInt(id))
    setcurentProduct(product)
  }, [id, type])

  console.log(id)
  console.log(curentProduct)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto mb-6"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#503217] hover:text-[#D3744A] transition-colors duration-200"
        >
          <GiFastBackwardButton className="text-2xl" />
          <span className="font-semibold">Back to Shop</span>
        </Link>
      </motion.div>

      {curentProduct && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">

            {/* Left Side - Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12"
            >
              {/* Badge */}
              {curentProduct.badge && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="absolute top-4 left-4 bg-[#D3744A] text-white px-4 py-2 rounded-lg shadow-lg z-10"
                >
                  <p className="text-sm font-bold">{curentProduct.badge}</p>
                </motion.div>
              )}

              {/* Product Image */}
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <img
                  className={`${curentProduct.imageSize} max-h-[400px] w-auto object-contain transition-transform duration-300 hover:scale-105`}
                  src={curentProduct.image}
                  alt={curentProduct.name}
                />
              </div>
            </motion.div>

            {/* Right Side - Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center space-y-6"
            >
              {/* Product Name */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#503217] mb-2">
                  {curentProduct.name}
                </h1>
                <div className="h-1 w-20 bg-[#D3744A] rounded-full"></div>
              </div>

              {/* Price Section */}
              <div className="flex items-baseline gap-4">
                <p className="text-4xl sm:text-5xl font-bold text-green-600">
                  {curentProduct.price}
                </p>
                {curentProduct.originalPrice && (
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold line-through text-red-400">
                      {curentProduct.originalPrice}
                    </p>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {Math.round(((parseFloat(curentProduct.originalPrice.replace('$', '')) - parseFloat(curentProduct.price.replace('$', ''))) / parseFloat(curentProduct.originalPrice.replace('$', ''))) * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Product Description */}
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  {curentProduct.description || "This premium health product is carefully selected to support your wellness journey. Made with high-quality ingredients and backed by expert recommendations."}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-[#503217]">Quantity:</span>
                <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={function () {
                    cart.addToCart(curentProduct, quantity)
                    setShowSuccess(true)
                    setTimeout(function () {
                      setShowSuccess(false)
                    }, 3000)
                  }}
                  className="flex-1 flex items-center justify-center gap-3 bg-[#D3744A] hover:bg-[#B86539] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaShoppingCart className="text-xl" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={function () {
                    wishlist.toggleWishlist(curentProduct)
                  }}
                  className={`flex items-center justify-center gap-3 border-2 ${
                    isWishlisted
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'border-[#D3744A] text-[#D3744A] hover:bg-[#D3744A] hover:text-white'
                  } font-bold py-4 px-8 rounded-xl transition-all duration-300`}
                >
                  <FaHeart className={`text-xl ${isWishlisted ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">
                    {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                  </span>
                </button>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <span className="text-xl">✓</span>
                  <span className="font-semibold">Added to cart successfully!</span>
                </motion.div>
              )}

              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <h3 className="font-semibold text-[#503217] text-lg mb-4">Product Features:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3744A] mt-1">✓</span>
                    <span>Premium quality ingredients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3744A] mt-1">✓</span>
                    <span>Tested and certified for safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3744A] mt-1">✓</span>
                    <span>Fast and secure delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D3744A] mt-1">✓</span>
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Loading State */}
      {!curentProduct && (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#D3744A] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      )}
    </div>
  )
}