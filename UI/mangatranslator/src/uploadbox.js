import './uploadbox.css'
import UploadIconA from './UploadIcon2Arrow.png'
import UploadIconB from './UploadIcon2Box.png'
function UploadBox(){
    return(
        <button className='UBox'> 
            <div className='Upload-icon'>                
                <img src={UploadIconA} className="UPIA" alt=""></img>             
                <img src={UploadIconB} className="UPIB" alt=""></img> 
            </div>
            <h2>Select File</h2>
            <p>pdf is supported</p>
        </button>
    )
}
export default UploadBox;