import Alert from "./Components/Alert";
import Button from "./Components/Button";
import React from "react";
// import ListGroup from "./Components/ListGroup";

function App() {
  // Code for list
  // const cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // return (
  //   <div>
  //     <ListGroup
  //       items={cities}
  //       heading="Cities"
  //       onSelectionItem={handleSelectItem}
  //     />
  //   </div>
  // );
  const [alertVisibility, setAlertVisible] = React.useState(false);

  const onButtonClick = (text: string) => {
    setAlertVisible(true);
    console.log(text);
  };

  return (
    <div>
      {alertVisibility === true && (
        <Alert onClose={() => setAlertVisible(false)}>See I told you</Alert>
      )}
      <a href="https://www.youtube.com/watch?v=SqcY0GlETPk" target="_blank">
        <Button color="danger" onClick={onButtonClick}>
          "Click Me. I'm trustworthy"
        </Button>
      </a>
    </div>
  );
}

export default App;
