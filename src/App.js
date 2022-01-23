import './App.css';
import SampleOne from './Assign-22Jan/SampleQ1'; //q1 - answer
import SampleTwo from './Assign-22Jan/SampleQ2'; //q2 - answer
import X from './Assign-22Jan/X';  //  ----+
import Y from './Assign-22Jan/Y';  //      |> q3 - answer
import Z from './Assign-22Jan/Z';  //  ----+

function App() {
  return (
    <>
      <h1>Question 1</h1>
      <SampleOne x="1" y="2" z="3"/>
      <SampleOne x="5" y="10" z="3"/>
      <SampleOne x="1" y="3" z="1"/>
      <hr/>
      <h1>Question 2</h1>
      <SampleTwo a="6" b="12" c="4"/>
      <SampleTwo a="9" b="6" c="5"/>
      <SampleTwo a="31" b="8" c="5"/>
      <hr></hr>
      <h1>Question 3</h1>
      <X a="5" b="9"/>
      <Y a="43" b="2" c="1"/>
      <Z/>
      <hr></hr>
    </>
  );
}

export default App;
