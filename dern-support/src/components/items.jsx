import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./items.css";

function Items(props) {

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:9001/deletepart/${props.id}`);
      // Assuming you have some logic to handle deletion on success, like refreshing the items list
      window.location.href = '/Inventory';
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:9001/spareparts");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className={`items-blog-post-card ${props.rootClassName} container`}>
      <div className="items-container">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="items-image"
        />
        <div className="items-container01">
          <div className="items-container02">
            <span className="items-text">{props.nameOfItem}</span>
            <span className="items-text01">{props.itemName}</span>
          </div>
          <div className="items-container03">
            <span className="items-text02">{props.sKU}</span>
            <span className="items-text03">{props.sKUName}</span>
          </div>
          <div className="items-container04">
            <span className="items-text04">{props.barcode}</span>
            <span className="items-text05">{props.barcodeNumber}</span>
          </div>
          <div className="items-container05">
            <span className="items-text06">{props.productCode}</span>
            <span className="items-text07">{props.productCodeNumber}</span>
          </div>
        </div>
      </div>
      <div className="items-container06">
        <div className="items-container07">
          <div className="items-container08">
            <Link
              to={`/update-item/${props.id}`}
              type="button"
              className="items-button button"
            >
              {props.edit}
            </Link>
            <Link
              type="button"
              className="items-button1 button"
              to={`/deletepart/${props.id}`}
              onClick={handleDelete}
            >
              {props.delete}
            </Link>
          </div>
        </div>
      </div>
      <div className="items-container09">
        <div className="items-container10">
          <span className="items-text08">{props.avaliable1}</span>
          <span className="items-text09">{props.availableNumber1}</span>
        </div>
        <div className="items-container11">
          <span className="items-text10">{props.inStock1}</span>
          <span className="items-text11">{props.inStockNumber1}</span>
        </div>
      </div>
    </div>
  );
}

Items.defaultProps = {
  id: 1,
  productCodeNumber: "596-685-PR",
  imageSrc1: "https://play.teleporthq.io/static/svg/default-img.svg",
  sKU: "SKU Code:",
  rootClassName: "",
  barcodeNumber: "256-8486-BR",
  barcode: "Barcode:",
  nameOfItem: "Item Name:",
  imageAlt1: "image",
  productCode: "Product Code:",
  sKUName: "259-648-SK",
  itemName: "Dummy Item",
  avaliable1: "Available:",
  availableNumber1: "250",
  inStock1: "In Stock:",
  inStockNumber1: "263",
  edit: "Edit",
  delete: "Delete",
};

Items.propTypes = {
  id: PropTypes.number.isRequired,
  productCodeNumber: PropTypes.string,
  imageSrc1: PropTypes.string,
  sKU: PropTypes.string,
  rootClassName: PropTypes.string,
  barcodeNumber: PropTypes.string,
  barcode: PropTypes.string,
  nameOfItem: PropTypes.string,
  imageAlt1: PropTypes.string,
  productCode: PropTypes.string,
  sKUName: PropTypes.string,
  itemName: PropTypes.string,
  avaliable1: PropTypes.string,
  availableNumber1: PropTypes.string,
  inStock1: PropTypes.string,
  inStockNumber1: PropTypes.string,
  edit: PropTypes.string,
  delete: PropTypes.string,
};

export default Items;
