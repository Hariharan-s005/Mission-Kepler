import style from "./Tag.module.css";

const Tag = ({ tags = [] }) => {
  const tagList = tags.map((list) => <aside key={list.id}>{list}</aside>);
  return <div className={style.tags}>{tagList}</div>;
};

export default Tag;
