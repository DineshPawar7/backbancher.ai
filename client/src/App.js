import Header from './Components/Header';
import Homepage from './Components/Homepage';
import SummaryCard from './Components/SummaryCard';
import Courses from './Components/Courses';
import './index.css';

function App() {
  return (
    <div>
      <div className='bg-color' >
      <Header />
      <Homepage />
      </div>
      <SummaryCard />
      <Courses />

    </div>
  );
}

export default App;
