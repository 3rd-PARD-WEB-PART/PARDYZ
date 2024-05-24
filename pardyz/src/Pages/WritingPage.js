import styled from "styled-components";
const WritingPage = () => {
return(
    <>
    {/* 가장 큰 div */}
    <Div>
        {/* 상단 div */}
        <TopDiv>
            <h1>실패 전시회</h1>
            <div>카테고리 / 작성하기</div>
        </TopDiv>

        {/* 하단 div */}
        <BottomDiv>
            {/* 왼쪽 div */}
            <div>여러분의 작품을 자랑해주세요!</div>
            <div>사진업로드</div>

            {/* 오른쪽 div */}
            <div>
                {/* 1~3 */}
                <div>
                    <label>작품명</label>
                    <input type="text" />
                </div>
                <div>
                    <label>작가명</label>
                    <input type="text" />
                </div>
                <div>
                    <label>작품명</label>
                    {/* 탭 div */}
                    <div>
                        <div>여행</div>
                        <div>요리</div>
                        <div>머리</div>
                        <div>패션</div>
                        <div>맛집</div>
                    </div>
                </div>
                {/* 4 */}
                <div>작품내용</div>
                {/* 폼 영역 */}
                <form>
                <div>
                    <label>1. 실패에 대해 자세하게 설명해주세요. (expLanation)</label>
                    <textarea />
                </div>
                <div>
                    <label>2. 실패를 겪으며 배운 점을 작성해주세요 (Learn)</label>
                    <textarea />
                </div>
                <div>
                    <label>3. 실패를 겪으며 깨달은 나의 부족한 부분을 작성해주세요. (Lacked)</label>
                    <textarea />
                </div>
                <div>
                    <label>4. 이 실패를 더 겪지 않으려면, 뭘 더 하면 좋을까요? (Longed for)</label>
                    <textarea />
                </div>
                <button>작성 완료</button>
                </form>
            </div>
        </BottomDiv>

    </Div>
    </>
);
};

const Div = styled.div`
display: flex;
flex-direction:column;
`;

const TopDiv = styled.div`
display: flex;
flex-direction: column;
`;

const BottomDiv = styled.div`
display: flex;
flex-direction: row;
`;
export default WritingPage;