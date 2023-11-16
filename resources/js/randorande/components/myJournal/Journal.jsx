

import React, { useState } from 'react';


export default function Journal() {

   
    const [user,setUser] = useState({
        username: 'vanessab',
        first_name:'Vanessa',
        last_name:'Durazo',
        email: 'vanessa@email.com'
    })

  

    return (
        <div className= "my-journal-parent">
          { user ?(
            <>
                <h2 >
                    My Journal
                </h2>
                <div className="my-journal-child">
                    <div className="user-detail-box">
                        <img src="/images/profile_image.png" alt="Sample Photo"  style={{ width: '30%', margin:'5%'} } />
                            <div className='user-detail-list'>
                                <h3>{user.username}</h3>
                                <p>First Name: {user.first_name}</p>
                                <p>Last Name: {user.last_name}</p>
                                <p>email: {user.email}</p>
                            </div>
                    </div>
                    <div className="randes-box">
                        <p>Rande 1</p>
                        <p>Rande 2</p> 
                        <p>Rande 3</p>
                    </div>
                </div>
                    </>
          ) : (
            "Loading..."
            
          )}    
      </div>
    );
}

