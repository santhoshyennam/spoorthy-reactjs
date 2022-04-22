import About from './About';
import Faculty from './Faculty';
import Course from './Course';
import Services from './Services';
import Formula from './Formula';
import Scanner from './Scanner';
function Home()
{
    return (
        <div>
      <About />
      <Services/>
      <Formula />
      <Faculty />
      <Course />
      <Scanner/>
        </div>
    )
}

export default Home;