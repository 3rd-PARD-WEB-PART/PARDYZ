import GlobalStyles from "../GlobalStyles";
import styled from "styled-components";

const DetailPage = () => {
  return (
      <Container>
        <div>
          <Title>실패 전시회</Title>
          <Subtitle>카테고리/요리</Subtitle>
        </div>
        <Exhibit>
          <Div>
            <img src="/image.png" alt="프로필 이미지" />
            <Name>
              <Label>작품명/작가명</Label>
            </Name>
          </Div>
          <Div>
            <p>
              본격적인 칭찬의 장을 마련해서  칭찬하기 쉬운 환경을 조성해 칭찬을 모두 기록하고 정리하면 어떨까? 본격적인 칭찬의 장을 마련해서  칭찬하기 쉬운 환경을 조성해 칭찬을 모두 기록하고 정리하면 어떨까?본격적인 칭찬의 장을 마련해서  칭찬하기 쉬운 환경을 조성해 칭찬을 모두 기록하고 정리하면
            </p>
          </Div>
          <Comment>
            <Label>작품에 대한 감상평을 남겨주세요!</Label>
            <input type="textarea" placeholder="Add a comment...."></input>
          </Comment>
          <input type="textarea" placeholder="Add a comment...."></input>
          <Button>작성완료</Button>
        </Exhibit>
      </Container>
  );
};

const Div = styled.div`
display: flex;
flex-direction: column;
width: 469px;
margin-top: 65px;
`

const Name = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

const Exhibit = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 608px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 1512px;
margin-top: 30px;
`

const Title = styled.p`
font-size: 42px;
font-weight: 600;
line-height: 18px;
text-align: center;
color: #929292;
`

const Subtitle = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18px;
text-align: center;
color: #929292;
`

const Label = styled.p`
font-size: 22px;
font-weight: 500;
line-height: 18px;
text-align: right;
margin-top: 17px;
margin-bottom: 90px;
`

const Comment = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
<<<<<<< HEAD
width: 608px;
=======
>>>>>>> fc98b7fbf15679c857674767cd55aea20cd79fc1
`

const Button = styled.button``

export default DetailPage;
