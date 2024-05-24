import { useState } from "react";
import styled from "styled-components";
import { postInfoAPI } from "../API/Axios";

const WritingPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: 0,
    painter: "",
    expLanation: "",
    learned: "",
    lacked: "",
    longedFor: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCategoryChange = (category) => {
    setFormData({
      ...formData,
      category
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postInfoAPI(formData);
    console.log (response);
  };

  return (
    <>
      <Div>
        <TopDiv>
          <h1>실패 전시회</h1>
          <div>카테고리 / 작성하기</div>
        </TopDiv>
        <BottomDiv>
          <Left>
            <div>여러분의 작품을 자랑해주세요!</div>
            <div>사진업로드</div>
          </Left>
          <Right>
            <FormArea>
              <label>작품명</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormArea>
            <FormArea>
              <label>작가명</label>
              <input
                type="text"
                name="painter"
                value={formData.painter}
                onChange={handleChange}
              />
            </FormArea>
            <FormArea>
              <label>카테고리</label>
              <div>
                <Category onClick={() => handleCategoryChange(0)}>여행</Category>
                <Category onClick={() => handleCategoryChange(1)}>요리</Category>
                <Category onClick={() => handleCategoryChange(2)}>머리</Category>
                <Category onClick={() => handleCategoryChange(3)}>패션</Category>
                <Category onClick={() => handleCategoryChange(4)}>맛집</Category>
              </div>
            </FormArea>
            <FormArea>
              <div>작품내용</div>
              <form onSubmit={handleSubmit}>
                <OneForm>
                  <label>1. 실패에 대해 자세하게 설명해주세요. (expLanation)</label>
                  <textarea
                    name="expLanation"
                    value={formData.expLanation}
                    onChange={handleChange}
                  />
                </OneForm>
                <OneForm>
                  <label>2. 실패를 겪으며 배운 점을 작성해주세요 (learned)</label>
                  <textarea
                    name="learned"
                    value={formData.learned}
                    onChange={handleChange}
                  />
                </OneForm>
                <OneForm>
                  <label>3. 실패를 겪으며 깨달은 나의 부족한 부분을 작성해주세요. (lacked)</label>
                  <textarea
                    name="lacked"
                    value={formData.lacked}
                    onChange={handleChange}
                  />
                </OneForm>
                <OneForm>
                  <label>4. 이 실패를 더 겪지 않으려면, 뭘 더 하면 좋을까요? (longedFor)</label>
                  <textarea
                    name="longedFor"
                    value={formData.longedFor}
                    onChange={handleChange}
                  />
                </OneForm>
                <button type="submit">작성 완료</button>
              </form>
            </FormArea>
          </Right>
        </BottomDiv>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #000;
  cursor: pointer;
`;

export default WritingPage;
