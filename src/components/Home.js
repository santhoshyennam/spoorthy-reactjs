import About from './About';
import Grades from './Grades';
import Price from './Price';
import Faculty from './Faculty';
import Course from './Course';
import Banners from './Banners';
import Services from './Services';
import Formula from './Formula';
function Home()
{
    return (
        <div>
        <Banners />
      <About />
      <Services/>
      <Formula />
      <Grades />
      <Price />
      {/* <Location /> */}
      <Faculty />
      <Course />
        </div>
    )
}

export default Home;