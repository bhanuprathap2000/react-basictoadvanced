import React from 'react'
//why we are importing import over here but not using it 
//mind you the jsx is converted to js using the react only.
import Quotes from "./Quotes"
function ListReder() {

    const quotes=[{"quote1":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},{"quote2":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"}]
//instead of using the manual we can use the map method offered by javascript.


    return (
        <Quotes key={quotes.author} quotes={quotes}/>
    )
    


 

}

export default ListReder

//it is good to pass key while rendering the list as it helps the react to keep to track of changes and update it 
//efficently.
// a key is a special string attribute you need to include when creating list of elements
//keys give the elements a stable identity
//keys help react identify which items have changed or removed or added.
//help in efficient update of the user interface.

//if we don't have a unique id we can use the index as the key prop 
//but make sure that use the index only when
//The items in your list don't have the unique id
//The list is static and don't change.
//The list will be never filtered or reorded.
