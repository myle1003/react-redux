import { useSelector } from 'react-redux';
import videoHomepage from '../../assets/video-homepage.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className='tilte-1'>There's a better way to ask</div>
                <div className='tilte-2'>When your forms break the norm, more people fill them out.
                    Think branded designs, video content, and relevant follow-up questions.</div>
                <div className='tilte-3'>
                    <button> Get's starter. It's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage;