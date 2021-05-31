import React from 'react';
import icon from '../images/calculator.svg'
import './FormStyles.css'


function Form({ setOnPaper, setIsNpd, setNpdInput, setAdditionalPension, isNpd, handleResult, errMsg }) {

    return (
        <form >
            <div>
                <label>Darbo užmokesčio dydis "ant popieriaus"</label>
                <input type="text" placeholder="0 €" onChange={(e) => { setOnPaper(e.target.value) }} />
            </div>
                <div className="Error-msg">{errMsg}</div>
            <div>
                <label>Kaip skaičiuoti NPD?</label>
                <select onChange={(e) => { setIsNpd(e.target.value) }}>
                    <option value="automatiskai">Automatiškai</option>
                    <option value="nurodysiu">Nurodysiu pats</option>
                </select>
            </div>
            {isNpd === "nurodysiu"
                ? <div>
                    <label>Taikomas NPD</label>
                    <input type="text" placeholder="0 €" onChange={(e) => { setNpdInput(e.target.value) }} />
                </div>
                : ""
            }
            <div>
                <label>Ar kaupiate pensijai papildomai</label>
                <select onChange={(e) => setAdditionalPension(e.target.value)}>
                    <option value="0">Nekaupiu</option>
                    <option value="2.4">2.4 %</option>
                    <option value="3">3 %</option>
                </select>
            </div>
            <button onClick={handleResult}><img src={icon} alt="icon" />Skaičiuoti</button>
        </form>
    )
}

export default Form
