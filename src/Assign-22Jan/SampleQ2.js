export default function SampleTwo({a,b,c}){//this a,b,c is destructured from props now we can use a,b,c itself
    function add(){
        return parseInt(a)+parseInt(b)+parseInt(c);
    }
    return(
        <h2>{add()}</h2>
    )
}