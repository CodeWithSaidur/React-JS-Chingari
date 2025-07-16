import { useCallback, useEffect, useRef, useState } from 'react';

export const App = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 999);
      navigator.clipboard.writeText(password).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
      });
    }
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 rounded-lg shadow-lg bg-gray-800 text-orange-500 space-y-4">
      <h2 className="text-xl font-bold text-center text-white">Password Generator</h2>

      <div className="flex">
        <input
          ref={passwordRef}
          type="text"
          readOnly
          value={password}
          className="flex-1 py-2 px-3 rounded-l-md text-black outline-none"
        />
        <button
          onClick={copyToClipboard}
          className={`px-4 rounded-r-md transition text-white ${
            copied ? 'bg-green-600' : 'bg-blue-700 hover:bg-blue-600'
          }`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="length">Length: {length}</label>
          <input
            id="length"
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-2/3 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="includeNumbers">Include Numbers</label>
          <input
            id="includeNumbers"
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="includeSymbols">Include Symbols</label>
          <input
            id="includeSymbols"
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
