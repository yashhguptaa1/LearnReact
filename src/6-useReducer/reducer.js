export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }

  console.log(state,action);
  
  return { ...state};
  
//   throw new Error("no matching action type");
};
/*
A reducer takes in state and action and returns new state
So the way that I can define which state it should return 
is with the switch statement
Switch will take look at whatever the type is
different types denote different actions that can be dispatched
think of action as some sort of event

*/
