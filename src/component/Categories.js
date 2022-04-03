import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const numberList = [
    {number:1},
    {number:2},
    {number:3},
    {number:4},
    {number:5},
];
const categories = [
    {
        name:'all',
        text:'전체보기'
    },
    {
        name:'business',
        text:'비즈니스'
    },
    {
        name:'entertainment',
        text:'엔터테인먼트'
    },
    {
        name:'health',
        text:'건강'
    },
    {
        name:'science',
        text:'과학'
    },
    {
        name:'sports',
        text:'스포츠'
    },
    {
        name:'technology',
        text:'기술'
    },
];


const CategoriesBlock =styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const RepliesBlock =styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
    
  // & 부모선택자를 참조, sass처럼 자기자신 선택 가능..? (p242)
  &:hover {
    color:#495057
  }
  
  &.active{
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
          color:#3bc9db;
        }
   }
  
  // &+& 인접한 형제선택자에 사용
  &+&{
    margin-left: 1rem;
  }
`;

const Reply = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
    
  // & 부모선택자를 참조, sass처럼 자기자신 선택 가능..? (p242)
  &:hover {
    color:#495057
  }
  
  &.active{
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
          color:#3bc9db;
        }
   }
  
  // &+& 인접한 형제선택자에 사용
  &+&{
    margin-left: 1rem;
  }
`;

const Categories = () => {
    return (
        <RepliesBlock>
            {numberList.map(n => (
                <Reply
                    key={n.number}
                    activeClassName="active"
                    exact={n.number === 'all'}
                    to={n.number === 'all'? '/':`/${n.number}`}
                >{n.number}</Reply>
            ))}
        </RepliesBlock>
    );
};

export default Categories;