import React, { useState, useEffect } from 'react';
// Components
import Form from './Form';
import Outputs from './Outputs';
//Styles
import './TableStyles.css'

function Table() {

    // Input states
    const [onPaper, setOnPaper] = useState('0');
    const [isNpd, setIsNpd] = useState(false); // if choose "nurodysiu pats" state changes to True
    const [npdInput, setNpdInput] = useState('0.00');
    const [additionalPension, setAdditionalPension] = useState("0.00");

    //Output states
    const [npdOutput, setNpdOutput] = useState('0.00');
    const [gpmOutput, setGpmOutput] = useState('0.00');
    const [vsdOutput, setVsdOutput] = useState('0.00');
    const [psdOutput, setPsdOutput] = useState('0.00');
    const [employerTax, setEmployerTax] = useState('0.00');

    const [ouputOnPaper, setOuputOnPaper] = useState('0.00');
    const [outputNet, setOutputNet] = useState('');
    const [outputFullPrice, setOutputFullPrice] = useState('');

    //Error message
    const [errMsg, setErrMsg] = useState('');

    // jeigu GPM nepasirinkta (automatiska) npdValue skaiciuojama pagal "npdOutput", jeigu pasirinkta (ivesiu pats) skaiciuoja pagal "npdInput"
    const npdValue = isNpd ? +npdInput : npdOutput;
    const gpmValue = isNpd ? +npdInput : 400 - 0.18 * (onPaper - 642);
    // Resets all outputs
    const outputsReset = () => {
            setNpdOutput('0.00');
            setGpmOutput('0.00');
            setVsdOutput('0.00');
            setPsdOutput('0.00');
            setEmployerTax('0.00');
            setOuputOnPaper('0.00');
            setOutputNet('0.00');
            setOutputFullPrice('0.00');
            setOnPaper('0');
    }

    const handleResult = (e) => {
        e.preventDefault();
        if (onPaper <= 0) {
            setErrMsg("*KLAIDA! įveskite teigiamą skaičių.");
            outputsReset()

        } else if (!isNaN(onPaper)) {
            setNpdOutput(gpmValue.toFixed(2));
            setGpmOutput(((onPaper - npdValue) * 20 / 100).toFixed(2));
            setPsdOutput(((onPaper * 6.98) / 100).toFixed(2));
            setVsdOutput((+onPaper * (12.52 + +additionalPension) / 100).toFixed(2))
            setEmployerTax((onPaper * 1.77 / 100).toFixed(2));
            setOuputOnPaper(onPaper);
            setOutputNet((onPaper - gpmOutput - vsdOutput - psdOutput).toFixed(2));
            setOutputFullPrice((+onPaper + +employerTax).toFixed(2));
            setErrMsg("");

        }
        else {
            setErrMsg("*KLAIDA - įvesti negalimi simboliai. Įveskite tik skaičių.");
            outputsReset()

        }
    }
    useEffect(() => {
        setGpmOutput(((onPaper - npdValue) * 20 / 100).toFixed(2));
        setOutputNet((onPaper - gpmOutput - vsdOutput - psdOutput).toFixed(2));
        setOutputFullPrice((+onPaper + +employerTax).toFixed(2));

    }, [onPaper, npdValue, gpmOutput, employerTax, vsdOutput, psdOutput])


    return (
        <div className="container">
            <Form
                setOnPaper={setOnPaper}
                setNpdInput={setNpdInput}
                setAdditionalPension={setAdditionalPension}
                setIsNpd={setIsNpd}
                isNpd={isNpd}
                handleResult={handleResult}
                errMsg={errMsg}
            />
            <Outputs
                npdOutput={npdOutput}
                gpmOutput={gpmOutput}
                psdOutput={psdOutput}
                vsdOutput={vsdOutput}
                ouputOnPaper={ouputOnPaper}
                outputNet={outputNet}
                outputFullPrice={outputFullPrice}
                employerTax={employerTax}
            />
        </div>
    )
}

export default Table
