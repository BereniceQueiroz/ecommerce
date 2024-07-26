import {ReactNode, createContext, useContext, useState} from 'react';

import {ProductsItem} from '@/dtos/products';

interface CartItem {
  product: ProductsItem;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: ProductsItem) => void;
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

  return (
    <CartContext.Provider value={{items: cartItems, addToCart}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
