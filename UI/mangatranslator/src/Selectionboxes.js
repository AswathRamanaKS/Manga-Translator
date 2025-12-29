import './Selectionboxes.css'


function Selectionboxes(){
    return(
        <div className="sboxes">
            <div className="dropbox">
                <p> Source Language: </p>
                <label for="cars"></label>
                <div className="select-box">
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                         
            </div>
            <div className="dropbox">
                <p> Target Language: </p>
                <label for="cars"></label>
                <div className="select-box">
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>           
            </div>
            <div className="dropbox">
                <p> Font Style: </p>
                <label for="cars"></label>
                <div className="select-box">
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>          
            </div>
        </div>

    )
}

export default Selectionboxes;