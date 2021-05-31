import React from 'react';
import './OutputStyles.css';

function Outputs({npdOutput, gpmOutput, psdOutput, vsdOutput, ouputOnPaper, outputNet, outputFullPrice, employerTax}) {
    return (
        <div className="wrapper">
                <div className="outputTable">
                    <h3>Darbo užmokesčio suvestinė*</h3>
                    <div className="OutputRowsContainer">
                        <p>Darbo užmokesčio dydis "ant popieriaus"</p>
                        <div>{ouputOnPaper} €</div>
                        <hr />
                        <p>Darbo užmokesčio dydis "į rankas"</p>
                        <div>{outputNet} €</div>
                        <hr />
                        <p>Visa darbo vietos kaina</p>
                        <div>{outputFullPrice} €</div>
                    </div>
                    <div className="outputColsContainer">
                        <div>
                            <hr />
                            <h4>NPD</h4>
                            <p>{npdOutput} €</p>
                        </div>
                        <div>
                            <hr />
                            <h4>GPM 20%</h4>
                            <p>{gpmOutput} €</p>
                        </div>
                        <div>
                            <hr />
                            <h4>PSD 6.98%</h4>
                            <p>{psdOutput} €</p>
                        </div>
                        <div>
                            <hr />
                            <h4>VSD 12.52%</h4>
                            <p>{vsdOutput} €</p>
                        </div>
                        <div>
                            <hr />
                            <h4>Darbdavio mokesčiai 1.77%</h4>
                            <p>{employerTax} €</p>
                        </div>
                    </div>
                </div>
                <p>*atitinka 2021 m. sausio 1 d. galiojančius teisės aktus</p>
            </div>

    )
}

export default Outputs
