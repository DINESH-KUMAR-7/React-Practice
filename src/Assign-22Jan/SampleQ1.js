export default function SampleOne(props){
    var a = 5;
    let b = 3;
    const c = 3;
    //creating function to add (x,y,z) with (a,b,c)
    function sum(){
        var val1 = parseInt(props.x) + a ;  //parseInt is to convert Str -> Int
        var val2 = parseInt(props.y) + b ;
        var val3 = parseInt(props.z) + c;
        return {val1,val2,val3};//returing multiple values
    }
    var values = sum();//calling function
    return(
        //just like props values have all 3 added value
        <h2>X+A is {values.val1} Y+B is {values.val2} Z+C is {values.val3}</h2>
    )
}