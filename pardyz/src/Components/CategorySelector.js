import React, { useState } from 'react';
import styled from 'styled-components';

const CategoryButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#FFD700' : '#DDDDDD')};
  color: ${props => (props.selected ? '#FFFFFF' : '#000000')};
`;

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };

  const category = ["여행", "요리", "헤어", "패션", "맛집"];

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <CategoryButton
          key={index}
          selected={selectedCategory === index}
          onClick={() => handleCategorySelect(index)}
        >
        </CategoryButton>
      ))}
    </div>
  );
};

export default CategorySelector;
