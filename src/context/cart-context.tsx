import {ReactNode, createContext, useContext, useState} from 'react';

import {ProductsItem} from '@/dtos/products';

interface CartItem {
  product: ProductsItem;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: ProductsItem) => void;
  removeToCart: (itemId: number) => void;
  incrementQuantity: (itemId: number) => void;
  decrementQuantity: (itemId: number) => void;
  calculateTotal: () => number;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({children}: {children: ReactNode}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(product: ProductsItem) {
    setCartItems(state => {
      const productInCart = state.some(item => item.product.id === product.id);

      if (productInCart) {
        return state.map(item => {
          if (item.product.id === product.id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        });
      } else {
        return [...state, {product, quantity: 1}];
      }
    });
  }

  function removeToCart(itemId: number) {
    setCartItems(cartItems.filter(item => item.product.id !== itemId));
  }

  function incrementQuantity(itemId: number) {
    setCartItems(state =>
      state.map(item =>
        item.product.id === itemId
          ? {...item, quantity: item.quantity + 1}
          : item,
      ),
    );
  }

  function decrementQuantity(itemId: number) {
    setCartItems(state =>
      state.map(item =>
        item.product.id === itemId && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  }

  function calculateTotal() {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
        removeToCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
