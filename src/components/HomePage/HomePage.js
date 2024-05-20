import './HomePage.css';
import TopImages from '../TopImages/TopImages.js';
import LookingFor from '../LookingFor/LookingFor.js';
import ShowMore from '../ShowMore/ShowMore.js';
import HomeBottom from '../HomeBottom/HomeBottom.js';

function HomePage() {
    return (
        <div className="Home">
            <TopImages />
            <LookingFor />
            <ShowMore />
            <HomeBottom />
        </div>
    )
}

export default HomePage;