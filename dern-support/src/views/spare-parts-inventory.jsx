import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useState, useEffect } from "react";
import Items from "../components/items";
import "./spare-parts-inventory.css";

function SparePartsInventory(props) {
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
    <div className="spare-parts-inventory-container">
      <Helmet>
        <title>Dern-Support</title>
        <meta
          property="og:title"
          content="Spare-Parts-Inventory - Dern-Support"
        />
      </Helmet>
      <header data-role="Header" className="spare-parts-inventory-header">
        <div className="spare-parts-inventory-nav"></div>
        <h1 className="spare-parts-inventory-text">
          <Link to="/HomeEmployee">Dern-Support</Link>
        </h1>
      </header>
      <div className="spare-parts-inventory-line"></div>
      <div className="spare-parts-inventory-container1">
        <h1 className="spare-parts-inventory-text1">Inventory</h1>
      </div>
      <div className="spare-parts-inventory-line1"></div>
      <div className="spare-parts-inventory-container2">
        {items &&
          items.map((item) => (
            <Items
              rootClassName="items-root-class-name"
              sKUName={item.skuCode}
              productCodeNumber={item.productCode}
              itemName={item.itemName}
              barcodeNumber={item.Barcode}
              id={item.id}
              itemImage={item.itemImage}
              availableNumber1={item.Avaliable}
              inStockNumber1={item.inStock}
              
            />
          ))}
      </div>
      <footer className="spare-parts-inventory-footer">
        <h1 className="spare-parts-inventory-text2">Dern-Support</h1>
        <span className="spare-parts-inventory-text3">
          © 2024 Dern-Support, All Rights Reserved.
        </span>
        <div className="spare-parts-inventory-icon-group">
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 950.8571428571428 1024"
              data-thq-animate-on-reveal="true"
              className="spare-parts-inventory-icon"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
          </animate-on-reveal>
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              data-thq-animate-on-reveal="true"
              className="spare-parts-inventory-icon2"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </animate-on-reveal>
          <animate-on-reveal
            animation="swing"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <svg
              viewBox="0 0 602.2582857142856 1024"
              data-thq-animate-on-reveal="true"
              className="spare-parts-inventory-icon4"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </animate-on-reveal>
        </div>
      </footer>
    </div>
  );
}

export default SparePartsInventory;
