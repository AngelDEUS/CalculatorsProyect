import React from 'react'
import './calculatorStyles.css'


const calculatorView = () => {
  return (
    <div className="mainCalculator">
      <div className="contentCalculator">
        <div className="leftCalculator">
          <div className="headerCalculator">
            <span className="tittleCalculator_H">My Calculator Vite</span>
          </div>
          <div className="contenCal_Calculator">
            <button type="button" className="btnCalculator">1</button>
            <button type="button" className="btnCalculator">2</button>
            <button type="button" className="btnCalculator">3</button>
            <button type="button" className="btnCalculator">4</button>
            <button type="button" className="btnCalculator">5</button>
            <button type="button" className="btnCalculator">6</button>
            <button type="button" className="btnCalculator">7</button>
            <button type="button" className="btnCalculator">8</button>
            <button type="button" className="btnCalculator">9</button>
            <button type="button" className="btnCalculator">,</button>
            <button type="button" className="btnCalculator">0</button>
            <button type="button" className="btnCalculator">.</button>
          </div>
          <div className="leftLeftContent">
            <div className="contenCal_CalculatorLeft">
              <button type="button" className="btnCalculator">+</button>
              <button type="button" className="btnCalculator">-</button>
              <button type="button" className="btnCalculator">x</button>
              <button type="button" className="btnCalculator">/</button>
              <button type="button" className="btnCalculator">%</button>
              <button type="button" className="btnCalculator">$</button>
            </div>
            <div className="bootomEquals">
              <button type="button" className="btnCalculator extend">=</button>
            </div>
          </div>
        </div>
        <div className="rightCalculator">
          <div className="contenRight">
            <div className="textContenRight">
              <span className="textIntCoso">I</span>
              <span className="textIntCoso">love</span>
              <span className="textIntCoso">calculators</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default calculatorView