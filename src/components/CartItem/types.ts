export interface CartItemProps {
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
  };
  quantity: number;
  removeItem: (itemId: number) => void;
  increment: (itemId: number) => void;
  decrement: (itemId: number) => void;
}
