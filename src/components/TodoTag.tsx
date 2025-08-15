

export const TodoTag = ({ tag }: { tag: string }) => {
  return (
    <span className="todo-tag">
      {`#${tag}`}
    </span>
  );
};
