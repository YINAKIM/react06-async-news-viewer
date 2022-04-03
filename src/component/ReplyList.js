import {useState, useEffect} from "react";
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import axios from "axios";
import ReplyItem from "./ReplyItem";

const ReplyListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ReplyList = ({number}) => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try{
                axios.defaults.headers = {
                    'Cache-Control': 'no-cache',
                    "Access-Control-Allow-Origin": '*'
                };

                const query = number === 1 ? '1' : `${number}`;
                const response = await axios.get(`/replies/${query}.json`);
                setArticles(response.data.article);

            }catch (e){
                console.log(e);
            }
        };

        fetchData();
        console.log(articles);
    }, [number]); // 처음 렌더링 되는 시점에 API를 요청

    if(!articles){
        return  null;
    }

    return (
        <ReplyListBlock>
            {articles.map(reply => (
                <ReplyItem reply={reply}/>
            ))}
        </ReplyListBlock>
    );
};

export default ReplyList;