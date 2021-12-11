import React, { useState, useContext } from "react";
import { data } from "../data";
// PROP DRILLING - more components
// To fix - context api
// redux (for more complex cases)

//Its just like a little container
//where we are going to able to store some data
//that can be consumed by any of the components
//that are part of the component tree
export const PersonContext = React.createContext();
// It gives us access to two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // useContext helps in accessing the data passed as value props
  //to context.Provider
  //Available to any component to consume
  // same as export const PersonConsumer = PersonContext.Consumer;

  const mainData = useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
/*
Instead of passing down all the values in component tree
we can place them in context so all child components know the 
values passed
*/
