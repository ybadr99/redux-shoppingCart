/* eslint-disable react/prop-types */
import { ChevronUp } from '../icons';
import { ChevronDown } from '../icons';
import { useDispatch } from 'react-redux';
import {
  removeItem,
  increaseAmount,
  decreaseAmount,
} from '../features/cart/cartSlice';

const CartItem = ({ id, thumbnail, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={thumbnail} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseAmount({ id }))}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => dispatch(decreaseAmount({ id }))}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
