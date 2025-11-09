import React, { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext()

export function WishlistContextProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([])

  // Load wishlist from localStorage on mount
  useEffect(function() {
    const savedWishlist = localStorage.getItem('medifitWishlist')
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(function() {
    localStorage.setItem('medifitWishlist', JSON.stringify(wishlistItems))
  }, [wishlistItems])

  function addToWishlist(product) {
    setWishlistItems(function(prevItems) {
      const existingItem = prevItems.find(function(item) {
        return item.id === product.id
      })
      
      if (existingItem) {
        return prevItems
      }
      
      return [...prevItems, product]
    })
  }

  function removeFromWishlist(productId) {
    setWishlistItems(function(prevItems) {
      return prevItems.filter(function(item) {
        return item.id !== productId
      })
    })
  }

  function clearWishlist() {
    setWishlistItems([])
  }

  function isInWishlist(productId) {
    return wishlistItems.some(function(item) {
      return item.id === productId
    })
  }

  function toggleWishlist(product) {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const value = {
    wishlistItems: wishlistItems,
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
    clearWishlist: clearWishlist,
    isInWishlist: isInWishlist,
    toggleWishlist: toggleWishlist,
    wishlistCount: wishlistItems.length
  }

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}