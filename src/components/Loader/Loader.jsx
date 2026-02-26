import './loader.scss'
import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='loader-overlay'>
            <HashLoader size={75} color="#00D8FF" />
        </div>
    )
}

export default Loader;