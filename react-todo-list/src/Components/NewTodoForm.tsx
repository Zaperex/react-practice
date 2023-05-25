import { useState } from "react";

interface Props {
  onSubmit: (newItem: string) => void;
}

export default function NewTodoForm(props: Props) {
  const [newItem, setNewItem] = useState("");

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (newItem === "") return;

  //   props.onSubmit(newItem);
  //   setNewItem("");
  // }
  return (
    <form
      className="new-item-form"
      // Decided to inline handleSubmit so that TypeScript can infer the type of e
      onSubmit={(e) => {
        e.preventDefault();
        if (newItem === "") return;

        props.onSubmit(newItem);
        setNewItem("");
      }}
    >
      <label htmlFor="item">New Item</label>
      <div className="form-row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
