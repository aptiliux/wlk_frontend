import React from "react";
import "./Card.css";

const Card = ({
  id,
  brand,
  description,
  image,
  price,
  referencePrice,
  addHandler,
}: {
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
  referencePrice: number;
  addHandler(id: number): void;
}) => {
  const addHttpWhenRemote = (path: string) => {
    if (path.indexOf("www") === 0) {
      return "http://" + path;
    }
    return path;
  };

  const discountPercent =
    referencePrice !== 0 ? (1 - price / referencePrice) * 100 : 0;

  return (
    <div className="Card">
      <div className="Card-product-image">
        <img
          style={{ height: "100%", width: "100%" }}
          src={addHttpWhenRemote(image)}
          alt="product"
        />
      </div>
      <div className="Card-product-data">
        <div className="Card-description">
          <span className="Card-brand">{brand} </span> {description}
        </div>
        <div>
          <span className="Card-price">${price}</span>
          {discountPercent > 0 && (
            <span className="Card-discount">
              {Math.round(discountPercent)}%
            </span>
          )}
        </div>
        {discountPercent > 0 && (
          <div className="Card-reference-price">${referencePrice}</div>
        )}
        <div className="Card-button-panel">
          <button className="Card-add-button" onClick={() => addHandler(id)}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
