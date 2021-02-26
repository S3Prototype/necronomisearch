import './index.css';
import Searchform from './components/Searchform';

function App() {

  //Put code here to toggle search results window.
  //pass the usestate function down to searchform
  //it should trigger usestate when a user clicks search.
  //and then it should toggle the results window off when the user
  //clicks a button in the search window or presses back on their phone.

  // * That use state stuff will be called after search results are gotten.

  return (
    <div className="App">
      <Searchform />
    </div>
  );
}

export default App;
