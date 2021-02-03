import React from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer}

/*

Using the context we can pass the data from the app component

direct to the deep nested component without need to pass through all the components in between.


Steps are as  follows first we need to create the usercontext from react.createcontext

then create the provider and consumner components from context
and export them as named export

we need to be careful while named exporting that is {} and also while importing{}

wrap the provider around the parent pass the  prop value strictly the name of the prop is value

now import the consumner in the needed comp and instantiate the comp

call the arrow function which accepts the parameter from userprovider and return back what you want to return.


*/