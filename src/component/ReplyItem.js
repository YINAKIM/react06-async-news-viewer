import styled from "styled-components";

const ReplyItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a { 
        color: black;
      }
    }

    p {
      margin: 0;
      line-height: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const ReplyItem = ({article}) => {
    const { rno, bno, reply, replyer, replyDate,updateDate } = article;


    return(
        <ReplyItemBlock>
            <div className="contents">
                <p>댓글번호 : {rno}</p>
                <p>댓글 : {reply}</p>
                <p>작성자 : {replyer}</p>
                <p>작성일 : {replyDate}</p>
                <p>수정일 : {updateDate}</p>
            </div>
        </ReplyItemBlock>
    );
};

export default ReplyItem;