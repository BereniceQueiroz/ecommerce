import {Helmet} from 'react-helmet-async';

import {Breadcrumb} from '@/components/Breadcrumb/breadcrumb';
import {CartItem} from '@/components/CartItem/cart-item';
import {useCart} from '@/context/cart-context';
import {formatCurrency} from '@/utils/formatted';

import {breadcrumbItems} from './data';
import {
  ContentCart,
  Label,
  Order,
  Preview,
  PreviewItem,
  Products,
  Title,
  Value,
  Wrapper,
} from './styles';

export function Cart() {
  const {
    items,
    removeToCart,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
  } = useCart();
  return (
    <Wrapper>
      <Helmet title="Carrinho" />
      <Breadcrumb items={breadcrumbItems} />
      <ContentCart>
        <Products>
          <Title>Seu carrinho</Title>
          {items.length > 0
            ? items.map(item => (
                <CartItem
                  item={item.product}
                  quantity={item.quantity}
                  removeItem={removeToCart}
                  increment={incrementQuantity}
                  decrement={decrementQuantity}
                />
              ))
            : null}
        </Products>
        <Order>
          <Title>Order Sumary</Title>
          <Preview>
            <PreviewItem>
              <Label>Subtotal</Label>
              <Value>{formatCurrency(calculateTotal())}</Value>
            </PreviewItem>
            <PreviewItem>
              <Label>Frete</Label>
              <Value>{formatCurrency(0)}</Value>
            </PreviewItem>
            <PreviewItem>
              <Label>Tax</Label>
              <Value>{formatCurrency(0)}</Value>
            </PreviewItem>
          </Preview>
          <PreviewItem>
            <Title>Total</Title>
            <Title>{formatCurrency(calculateTotal())}</Title>
          </PreviewItem>
        </Order>
      </ContentCart>
    </Wrapper>
  );
}
