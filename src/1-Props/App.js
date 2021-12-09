import React from "react";

const App = () => {
  return (
    <div>
      <Book title="christ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software .
      </Book>

      <Book title="yash" author="gupta">
        <Inside />
      </Book>
    </div>
  );
};

const Book = (props) => {
  //props is object passed to every component
  console.log(props);

  //Object destructuring
  const { title, author, children } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      {children}
    </div>
  );
};

const Inside = () => {
  return <div>CHILDREN COMPONENT</div>;
};

export default App;
