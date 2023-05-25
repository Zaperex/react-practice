import { MouseEvent, useState, Fragment } from "react"; // Not necessary since we can just add empty <> </> and react will know to add Fragment in for you

// {items: [], heading: string }
// Use an interface

interface ListGroupProps {
  items: string[];
  heading: string;
  // Define a function signature
  onSelectionItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectionItem }: ListGroupProps) {
  // State Hook tells react that this data can change over time
  // Need to import useState from "react"
  const [selectedIndex, setHighlight] = useState(-1);

  function handleClick(index: number): undefined {
    if (selectedIndex === index) {
      setHighlight(-1);
      return;
    }
    setHighlight(index);
  }

  //const cities: string[] = [];
  /*
  const getMessage = () => {
    return cities.length === 0 ? <p>No item found</p> : null;
  };
  */

  // need to import MouseEvent from "react"
  //const handleClick = (event: React.MouseEvent) => console.log(event);

  // Using (component && condition) is a way to dynamically load components
  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              handleClick(index);
              onSelectionItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
