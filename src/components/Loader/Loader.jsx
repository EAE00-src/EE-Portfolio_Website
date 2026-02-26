import './loader.scss'
import { HashLoader } from "react-spinners";

const Loader = ({fading}) => {
    return (
        <div className={`loader-overlay ${fading ? 'fade-out' : 'fade-in'}`}>
            <HashLoader size={70} color="#00D8FF" />
        </div>
    )
}

export default Loader;