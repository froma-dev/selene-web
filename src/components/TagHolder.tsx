import Tag, { TagProps } from "@components/Tag";
import "@styles/TagHolder.css";

interface TagHolderProps {
  tags: TagProps[];
  selectedTag: string | null;
}

const TagHolder = ({ tags, selectedTag }: TagHolderProps) => {
  return (
    <div className="tag-holder">
      {tags.map((tag) => {
        return (
          <Tag key={tag.name} {...tag} isSelected={tag.id === selectedTag} />
        );
      })}
    </div>
  );
};

export default TagHolder;
