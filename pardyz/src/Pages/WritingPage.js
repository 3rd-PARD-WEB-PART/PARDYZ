import { useState } from "react";
import styled from "styled-components";
import { postInfoAPI } from "../API/Axios";
import MenuBar from "../Components/MenuBar";
import { useRef } from "react";
import CategorySelector from "../Components/CategorySelector";

const WritingPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: 0,
    painter: "",
    expLanation: "",
    learned: "",
    lacked: "",
    longedFor: "",
    imageData: ""
  });

  const fileInput = useRef();

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

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setFormData({
      ...formData,
      imageData: imageURL,
    })
  }

  const onClickFile = () => {
    fileInput.current.click();
  }

  return (
    <>
      <Div>
        <TopDiv>
          <img src="/top.png" width="10%" />
          <img src="/logo.png" width="30%" />
        <MenuBar/>
        </TopDiv>
        <BottomDiv>
          <Left>
            <LeftTitle>여러분의 작품을 자랑해주세요!</LeftTitle>
            <button type="button" onClick={onClickFile}>
              <input type="file" ref={fileInput} onChange={handleFileInputChange}></input>
            </button>
          </Left>
          <Right>
            <FormArea>
              <BigLabel>작품명</BigLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormArea>
            <FormArea>
              <BigLabel>작가명</BigLabel>
              <Input
                type="text"
                name="painter"
                value={formData.painter}
                onChange={handleChange}
              />
            </FormArea>
            <FormArea>
              <BigLabel>카테고리</BigLabel>
              {/* <CategoryButton>
                <Category onClick={() => handleCategoryChange(0)}>여행</Category>
                <Category onClick={() => handleCategoryChange(1)}>요리</Category>
                <Category onClick={() => handleCategoryChange(2)}>머리</Category>
                <Category onClick={() => handleCategoryChange(3)}>패션</Category>
                <Category onClick={() => handleCategoryChange(4)}>맛집</Category>
              </CategoryButton> */}
              <CategorySelector />
            </FormArea>
            <FormArea>
              <BigLabel>작품내용</BigLabel>
              <form onSubmit={handleSubmit}>
                <OneForm>
                  <Label>1. 실패에 대해 자세하게 설명해주세요.</Label>
                  <Textarea
                    name="expLanation"
                    value={formData.expLanation}
                    onChange={handleChange}
                  />
                </OneForm>
                <OneForm>
                  <Label>2. 실패를 겪으며 배운 점을 작성해주세요.</Label>
                  <Textarea
                    name="learned"
                    value={formData.learned}
                    onChange={handleChange}
                  />
                </OneForm>
                <OneForm>
                  <Label>3. 실패를 겪으며 깨달은 나의 부족한 부분을 작성해주세요. (lacked)</Label>
                  <Textarea
                    name="lacked"
                    value={formData.lacked}
                    onChange={handleChange}
                  />
                </OneForm>
                <OneForm>
                  <Label>4. 이 실패를 더 겪지 않으려면, 뭘 더 하면 좋을까요? </Label>
                  <Textarea
                    name="longedFor"
                    value={formData.longedFor}
                    onChange={handleChange}
                  />
                </OneForm>
                <WriteDone type="submit">작성 완료</WriteDone>
              </form>
            </FormArea>
          </Right>
        </BottomDiv>
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 1512px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 0px;
  top: 0px;
  z-value: -1;
  background-image : url("/bg.png");
  background-repeat : no-repeat;
  background-size : cover;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 434px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 428px;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Category = styled.div`
  display: inline-block;
  text-align: center;
  margin: 5px;
  background-color: #FFFDFA;
  cursor: pointer;
  width: 40px;
  height: 20px;
  padding: 9px 23px 9px 22px;
  gap: 0px;
  border-radius: 6px;
  opacity: 0px;
  box-shadow: 0px 4px 10px 0px #0000001A;
`;

const LeftTitle = styled.div`
width: 434px;
height: 18px;
gap: 0px;
opacity: 0px;
font-family: 210 Cheoeumcheoreom;
font-size: 26.4px;
font-weight: 400;
line-height: 18px;
text-align: left;
color: #222222;
display: flex;
justify-content: center;
`

const Textarea = styled.textarea`
width: 428px;
height: 84px;
top: 24px;
left: 7px;
gap: 0px;
border-radius: 6px;
opacity: 0px;
background: #FFFDFA;
box-shadow: 4px 4px 10px 0px #0000001A;
`

const Label = styled.label`
width: auto;
height: 18px;
gap: 0px;
opacity: 0px;
`

const WriteDone = styled.button`
width: 162px;
height: 18px;
top: 21px;
left: 133px;
gap: 0px;
opacity: 0px;
padding: 21px 132px 15px 133px;
border-radius: 6px;
background: #FFBD3D;
color: black;
display: flex;
justify-content: center;
align-items: center;

`

const Input = styled.input`
width: 428px;
height: 36px;
top: 416px;
left: 844px;
gap: 0px;
border-radius: 6px;
opacity: 0px;
background: #FFFDFA;
box-shadow: 0px 4px 10px 0px #0000001A;
display: flex;
margin-bottom: 15px;
`

const BigLabel = styled.label`
width: 80px;
height: 18px;
top: 563px;
left: 844px;
gap: 0px;
opacity: 0px;
font-family: 210 Cheoeumcheoreom;
font-size: 18px;
font-weight: 400;
line-height: 18px;
text-align: left;
color: #222222;
margin-bottom: 3px;
`

const Title = styled.div`
width: 267px;
height: 17px;
top: 141px;
left: 730px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 50px;
font-weight: 600;
line-height: 18px;
text-align: center;
color: #929292;
margin-bottom: 20px;
margin-top: 60px;
`

const SubTitle = styled.div`
width: 120px;
height: 17px;
top: 179px;
left: 804px;
gap: 0px;
opacity: 0px;
font-family: Apple SD Gothic Neo;
font-size: 16px;
font-weight: 500;
line-height: 18px;
text-align: center;
color: #929292;
`

const CategoryButton = styled.div`
margin-bottom: 20px;
`

export default WritingPage;
