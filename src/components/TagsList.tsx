import { TodoTag } from "./TodoTag";


export const TagsList = ({ tags }: { tags: string[] }) => {
  return (
    <section className="tags-list">
      {tags?.map((tag, index) => (
        <TodoTag key={index} tag={tag} />
      ))}
    </section>

  );
};
