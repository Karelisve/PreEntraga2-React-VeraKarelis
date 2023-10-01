import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    let[quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity +=1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -=1)
        }
    }

    return(
        <div>
            <div>
                <button onClick={decrement}> - </button>
                <h2>{quantity}</h2>
                <button onClick={increment}> + </button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito </button>
            </div>
        </div>
    )
}


export default ItemCount;