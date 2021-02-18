import React from 'react';

export default function RestaurantForm({ restaurantInformation = {}, handleChange, handleClick }) {
  const { name, category, address } = restaurantInformation;

  return (
    <div>
      <input placeholder="이름" value={name} onChange={handleChange} />
      <input placeholder="분류" value={category} onChange={handleChange} />
      <input placeholder="주소" value={address} onChange={handleChange} />
      <button type="button" onClick={handleClick}>등록</button>
    </div>
  );
}
