import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

const NewsPage = ({match}) => {
    const category = match.params.category || 'all'; // match props에서 꺼낸 값이 없으면 카테고리 'all'

    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
};

export default NewsPage;