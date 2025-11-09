import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { CartContext } from '../../context/cartContext'
import { MdClose, MdDelete } from 'react-icons/md'
import { FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Cart() {
  const cart = useContext(CartContext)

  return (
    <AnimatePresence>
      {cart.isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cart.toggleCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#503217] text-white p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <FaShoppingBag className="text-2xl" />
                <div>
                  <h2 className="text-2xl font-bold">Shopping Cart</h2>
                  <p className="text-sm text-white/80">
                    {cart.cartItems.length} {cart.cartItems.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <button
                onClick={cart.toggleCart}
                className="text-3xl hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <MdClose />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <FaShoppingBag className="text-8xl text-gray-300 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Add some products to get started!
                  </p>
                  <Link
                    to="/shop"
                    onClick={cart.toggleCart}
                    className="px-6 py-3 bg-[#D3744A] text-white rounded-lg hover:bg-[#B86539] transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.cartItems.map(function(item) {
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-gray-50 rounded-lg p-4 flex gap-4 relative"
                      >
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="font-bold text-[#503217] mb-1 pr-8">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {item.categoryName}
                          </p>
                          <p className="text-lg font-bold text-green-600">
                            {item.price}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={function() {
                                cart.updateQuantity(item.id, item.quantity - 1)
                              }}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <FaMinus className="text-xs" />
                            </button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={function() {
                                cart.updateQuantity(item.id, item.quantity + 1)
                              }}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={function() {
                            cart.removeFromCart(item.id)
                          }}
                          className="absolute top-2 right-2 text-red-500 hover:bg-red-100 p-2 rounded-full transition-colors"
                        >
                          <MdDelete className="text-xl" />
                        </button>
                      </motion.div>
                    )
                  })}

                  {/* Clear Cart Button */}
                  {cart.cartItems.length > 0 && (
                    <button
                      onClick={cart.clearCart}
                      className="w-full py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <MdDelete />
                      Clear Cart
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer - Total & Checkout */}
            {cart.cartItems.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-700">
                    Subtotal:
                  </span>
                  <span className="text-2xl font-bold text-[#503217]">
                    ${cart.getCartTotal().toFixed(2)} USD
                  </span>
                </div>
                <button className="w-full bg-[#D3744A] hover:bg-[#B86539] text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg mb-3">
                  Proceed to Checkout
                </button>
                <button
                  onClick={cart.toggleCart}
                  className="w-full border-2 border-[#D3744A] text-[#D3744A] hover:bg-[#D3744A] hover:text-white font-bold py-3 rounded-xl transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}