import SVGCloseIcon from '@/assets/close.svg?react';
import SVGMinusIcon from '@/assets/minus.svg?react';
import SVGPlusIcon from '@/assets/plus.svg?react';
import {formatCurrency} from '@/utils/formatted';

import {
  CartItemContainer,
  ContentDescription,
  ItemDetails,
  ItemImage,
  ItemName,
  ItemPrice,
  ItemQuantity,
  QuantityButton,
  QuantityValue,
  RemoveButton,
} from './styles';
import {CartItemProps} from './types';

export function CartItem({
  item,
  quantity,
  removeItem,
  increment,
  decrement,
}: CartItemProps) {
  return (
    <CartItemContainer>
      <ContentDescription>
        <ItemImage src={item.image} alt={item.description} />
        <ItemName>{item.title}</ItemName>
        <ItemPrice>{formatCurrency(item.price)}</ItemPrice>
      </ContentDescription>
      <ItemDetails>
        <ItemQuantity>
          <QuantityButton onClick={() => decrement(item.id)}>
            <SVGMinusIcon />
          </QuantityButton>
          <QuantityValue>{quantity}</QuantityValue>
          <QuantityButton onClick={() => increment(item.id)}>
            <SVGPlusIcon />
          </QuantityButton>
        </ItemQuantity>
        <RemoveButton onClick={() => removeItem(item.id)}>
          <SVGCloseIcon />
        </RemoveButton>
      </ItemDetails>
    </CartItemContainer>
  );
}
