import Categories from "../component/Categories";
import ReplyList from "../component/ReplyList";

const ReplyPage = ({match}) => {

    const number =  match.params.number || 1 ; //default 1

    return (
        <>
            <Categories/>
            <ReplyList number={number}/>
        </>
    );
};

export default ReplyPage;