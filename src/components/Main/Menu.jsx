import React from 'react';
import { ITEM_TYPES, ITEMS } from '../dummydata';
import "./index.css";

class Menu extends React.Component {
    state = {
        type: "All",
        cart: []
    };

    handleQuantitySelect = (id, value) => {
        const { cart } = this.state;
        const cartCopy = [...cart];
        cartCopy.push({
            quantity: Number(value),
            item_id: id,
        })
        this.setState({ cart: cartCopy });
    }

    handleAddToCart = (id) => {
        const { cart } = this.state;
        const cartCopy = [...cart];
        cartCopy.push({
            quantity: 1,
            item_id: id,
        })
        this.setState({ cart: cartCopy });
    }

    getItem = (eachItem) => {
        const { id, description, price, image_url } = eachItem;
        return (
            <div key={"menu" + id} className="shopping-each-item">
                <div className="description">{description}</div>
                <div className="product-image" style={{ backgroundImage: `url('${image_url}')` }}>
                </div>
                <div className="price">{price}</div>
                <select name="quantity" className="quantity" onChange={(event) => this.handleQuantitySelect(id, event.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                <button className="add-to-cart" onClick={() => this.handleAddToCart(id)}>
                    Add to Cart
                </button>
            </div>
        )
    }

    handleMenuClick = (typeClicked) => {
        console.log(typeClicked);
        this.setState({ type: typeClicked })
    }

    render() {
        const { type, cart } = this.state;
        console.log(cart)

        return (
            <div className="shopping-menu">
                <div className="menu-items">
                    {
                        ITEM_TYPES.map((eachType) => {
                            return (
                                <button
                                    className={eachType === type ? "active" : ""}
                                    key={eachType}
                                    onClick={() => this.handleMenuClick(eachType)}
                                >
                                    {eachType}
                                </button>
                            )
                        })
                    }
                </div >
                <div className="shopping-items">
                    {
                        ITEMS.map((eachItem) => {
                            if (type === "All") {
                                return this.getItem(eachItem);
                            } else if (type === eachItem.type) {
                                return this.getItem(eachItem);
                            }
                            return null;
                        })
                    }
                </div >

            </div >

        )
    }
}

export default Menu;
