export default function Z(){
    let a1 = 7;
    let b1 = 8;
    let c1 = 54;
    let d1 = 234;
    function addLocalVariables(){
        return a1+b1+c1+d1;
    }
    return(
        <h2>{addLocalVariables()}</h2>
    )
}