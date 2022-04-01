import styled,{css} from 'styled-components';

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

const Category = styled.div`
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
  
  // TODO props가 active면 적용되는 css
  ${props => 
    props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
          color:#3bc9db;
        }
   `}
  
  // &+& 인접한 형제선택자에 사용
  &+&{
    margin-left: 1rem;
  }
`;


const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;