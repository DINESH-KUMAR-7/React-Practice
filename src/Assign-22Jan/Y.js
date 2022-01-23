function Y({a,b,c}){
    function addABandC(){//destructured a , b and c
        return parseInt(a)+parseInt(b)+parseInt(c);
    }
    return(
        <h2>{addABandC()}</h2>
    )
}

export default Y;