import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(function() {
    const savedCart = localStorage.getItem('medifitCart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(function() {
    localStorage.setItem('medifitCart', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, quantity) {
    if (quantity === undefined) {
      quantity = 1
    }
    
    setCartItems(function(prevItems) {
      const existingItem = prevItems.find(function(item) {
        return item.id === product.id
      })
      
      if (existingItem) {
        return prevItems.map(function(item) {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + quantity }
          }
          return item
        })
      }
      
      return [...prevItems, { ...product, quantity: quantity }]
    })
  }

  function removeFromCart(productId) {
    setCartItems(function(prevItems) {
      return prevItems.filter(function(item) {
        return item.id !== productId
      })
    })
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(function(prevItems) {
      return prevItems.map(function(item) {
        if (item.id === productId) {
          return { ...item, quantity: quantity }
        }
        return item
      })
    })
  }

  function clearCart() {
    setCartItems([])
  }

  function getCartTotal() {
    return cartItems.reduce(function(total, item) {
      const price = parseFloat(item.price.replace('$', '').replace(' USD', ''))
      return total + price * item.quantity
    }, 0)
  }

  function getCartCount() {
    return cartItems.reduce(function(count, item) {
      return count + item.quantity
    }, 0)
  }

  function toggleCart() {
    setIsCartOpen(!isCartOpen)
  }

  const value = {
    cartItems: cartItems,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    updateQuantity: updateQuantity,
    clearCart: clearCart,
    getCartTotal: getCartTotal,
    getCartCount: getCartCount,
    isCartOpen: isCartOpen,
    toggleCart: toggleCart,
    setIsCartOpen: setIsCartOpen,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}