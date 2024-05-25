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

  return (
    <div>
        <CategoryButton
          selected={selectedCategory === 1}
          onClick={() => handleCategorySelect("여행")}
        ></CategoryButton>
        <CategoryButton
          selected={selectedCategory === 2}
          onClick={() => handleCategorySelect("요리")}
        ></CategoryButton>
        <CategoryButton
          selected={selectedCategory === 3}
          onClick={() => handleCategorySelect("헤어")}
        ></CategoryButton>
        <CategoryButton
          selected={selectedCategory === 4}
          onClick={() => handleCategorySelect("패션")}
        ></CategoryButton>
        <CategoryButton
          selected={selectedCategory === 5}
          onClick={() => handleCategorySelect("맛집")}
        ></CategoryButton>
    </div>
  );
};

export default CategorySelector;
