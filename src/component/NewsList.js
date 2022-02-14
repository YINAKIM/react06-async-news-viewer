import {useState, useEffect} from "react";
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
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


const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {}, []); // 처음 렌더링 되는 시점에 API를 요청
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); //처음에 로딩중 ...true

            try{
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=여기다발급받은앱키를넣는다');
                setArticles(response.data.articles);
            }catch (e){

            }
            setLoading(false);//로딩끝났으니까 false
        };

        fetchData();
    }, []); // 처음 렌더링 되는 시점에 API를 요청

    // 대기중일 때 ) loading:true
    if(loading){
        return <NewsListBlock>대기중......</NewsListBlock>;
    }

    // 아직 articles값이 설정되기 전 : null 일 때의 처리 필수
    // article이 null이고, map함수가 없기때문에 렌더링 오류날 수 있음
    if(!articles){
        return  null;
    }

    // articles 값이 유효한 값일 때 : "null이 아닐 때의 처리"만
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;