import React from 'react'

function MemoComp()
 {
     console.log("memo compoenent.");
    return (
        <div>
            Memo Compoent
        </div>
    )

    
}

export default React.memo(MemoComp)
//in the class component we were using the pure component but here we are using the React.memo(comp) and return back
//component with some additional features