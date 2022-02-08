# axios로 비동기작업하기 
> yarn add axios

# 외부API연동하여 news-viewer 만들기
- newsapi) https://newsapi.org/s/south-korea-news-api
- 컴포넌트 스타일링 라이브러리 사용 
  >yarn add styled-components

### 컴포넌트 구조 
- NewsList컴포넌트 안에 NewsItem컴포넌트 목록 
- useEffect를 사용하여 컴포넌트 최초렌더링시 API호출
- loading 상태값 (true/false)으로 요청 대기중인디 완료인지 보여주기 

