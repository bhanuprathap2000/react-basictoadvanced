import React from 'react'
//we have used the object destructuring.
function Quotes({quotes}) {
    return (
        <div>
        <div>
        {quotes[0].quote1}
        </div>
        <div>
        {quotes[1].quote2}
        </div>
     </div>
    )
}

export default Quotes


//naming conventions
//pascal case 
//while exporting name should match with class or functional component.