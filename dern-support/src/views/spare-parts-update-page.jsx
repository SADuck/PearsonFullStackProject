import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateSparePartForm() {
  const { id } = useParams(); // Change itemId to id
  const [formData, setFormData] = useState({
    itemName: '',
    itemImage: '',
    skuCode: '',
    Barcode: '',
    productCode: '',
    Avaliable: 0,
    inStock: 0,
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:9001/spareparts/${id}`);
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9001/updatepart/${id}`, formData); // Change itemId to id
      setFormData({
        itemName: '',
        itemImage: '',
        skuCode: '',
        Barcode: '',
        productCode: '',
        Avaliable: 0,
        inStock: 0,
      });
    } catch (error) {
      console.error('Error updating spare part:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" />
      <input type="text" name="itemImage" value={formData.itemImage} onChange={handleChange} placeholder="Item Image URL" />
      <input type="text" name="skuCode" value={formData.skuCode} onChange={handleChange} placeholder="SKU Code" />
      <input type="text" name="Barcode" value={formData.Barcode} onChange={handleChange} placeholder="Barcode" />
      <input type="text" name="productCode" value={formData.productCode} onChange={handleChange} placeholder="Product Code" />
      <input type="number" name="Avaliable" value={formData.Avaliable} onChange={handleChange} placeholder="Available" />
      <input type="number" name="inStock" value={formData.inStock} onChange={handleChange} placeholder="In Stock" />
      <button type="submit">Update Spare Part</button>
    </form>
  );
}

export default UpdateSparePartForm;
