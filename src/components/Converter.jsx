import { useState } from 'react';

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    mile: 0.000621371,
    foot: 3.28084,
  },
};

function Converter() {
  const [inputValue, setInputValue] = useState(1);
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [category] = useState('length');

  const convert = () => {
    const fromRate = units[category][fromUnit];
    const toRate = units[category][toUnit];
    return (inputValue * toRate) / fromRate;
  };

  return (
    <div className="animate-fade-in backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-3xl p-8 max-w-xl w-full text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">🌐 Unit Converter</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm">From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full bg-white/80 text-black border border-white/30 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"

          >
            {Object.keys(units[category]).map((unit) => (
              <option className="text-black bg-white" key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm">To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full bg-white/80 text-black border border-white/30 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400"

          >
            {Object.keys(units[category]).map((unit) => (
              <option className="text-black bg-white" key={unit} value={unit} >{unit}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-1 text-sm">Value</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full bg-white/20 border border-white/30 rounded-lg p-2 text-white outline-none"
        />
      </div>

      <div className="mt-6 text-center text-2xl font-semibold">
        {inputValue} {fromUnit} ={' '}
        <span className="text-blue-400">{convert().toFixed(4)}</span> {toUnit}
      </div>
    </div>
  );
}

export default Converter;
