function Message() {
  // This syntax is JSX (Javascript XML)
  return <h1>Hello {getName()}</h1>;
}

function getName(): string {
  return "Frank";
}
export default Message;
