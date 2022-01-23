export default function X({a,b}){//destructured a and b
    function addAandB(){
        return parseInt(a)+parseInt(b);
    }
    return(
        <h2>{addAandB()}</h2>
    )
}