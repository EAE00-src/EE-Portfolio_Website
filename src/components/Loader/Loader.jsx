import './loader.scss'
import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='loader-overlay'>
            <HashLoader size={75} color="#ee0000" />
        </div>
    )
}

export default Loader;