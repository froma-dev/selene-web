import Tag from "@components/Tag";

const TagHolder = ({ tags }: { tags: string[] }) => {
  return (
    <div className="tag-holder">
      {tags.map((tag) => {
        return <Tag name={tag} />;
      })}
    </div>
  );
};

export default TagHolder;