import React from 'react'

const Personal  = (personDtls) => {
    return(
            <div className="personal_info">
                <p><strong>Name: </strong>{personDtls.name}</p>
                <p><strong>Age: </strong>{personDtls.age}</p>
            </div>
    );
}


export default Personal;