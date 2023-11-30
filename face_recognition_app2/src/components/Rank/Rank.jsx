import React from 'react'

function Rank({ userName, userEntry }) {
     return (
          <>
               <div className='white f3 b'>
                    {`${userName} , your current rank is...`}
               </div>
               <div className='white f1 b'>
                    {userEntry}
               </div>
          </>
     )
}

export default Rank