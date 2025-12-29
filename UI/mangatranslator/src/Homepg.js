import './Homepg.css'
import TopRibbon from './TopRibbon'
import UploadBox from "./uploadbox"
import Selectionboxes from "./Selectionboxes"
function HomePg(){
    return(
        <>
            <TopRibbon/>
            <div className="UB">      
                <Selectionboxes/>
                <UploadBox/>
            </div>        
        </>
    )
}
export default HomePg;