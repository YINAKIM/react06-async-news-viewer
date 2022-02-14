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

---
***데이터 연동하기***
## 1.useEffect를 사용하여 렌더링 시점에 API요청하기
[react02-hooks-tutorial참고](https://github.com/YINAKIM/react02-hooks-tutorial)
- useEffect는 함수컴포넌트에서 클래스컴포넌트의 라이프사이클메서드처럼 사용 :   
- 처음 렌더링할 때만 실행시키려면 useEffect의 두번째 인자로 빈 배열을 넣는다.
```
useEffect( () => {
    console.log('최초렌더링에만 실행');
},[]);
```
- useEffect에 등록하는(?) 함수에 async를 붙이면 X (useEffect는 클린업함수를 반환해야하므로)
***useEffect내부에 async/await을 사용하려면 ?***
  > 함수 내부에 async키워드를 붙인 또 다른 함수를 만들어 사용한다.
  ```
    useEffect(() => {
        // async키워드가 붙은 함수를 새로생성
        const fetchData = async () => {
            setLoading(true);
            ...생략...
        };

        fetchData();
    }, []); // 처음 렌더링 되는 시점에 API를 요청
  ```
  ***함수이름 앞에 async키워드가 붙는다?***   "나 이 함수안에서 비동기작업 할꺼야"라는 뜻


## 2.axios 사용하여 비동기작업하기
