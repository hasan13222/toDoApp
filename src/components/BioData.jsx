
const BioData  = (personDtls) => { 
    return(
        <div>
            <h1>Bio Data of {personDtls.name}</h1> 
            {personDtls.children}
        </div>
    );
}


export default BioData;