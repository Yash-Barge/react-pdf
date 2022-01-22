import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument.js';

function App() {
  const [name, setName] = useState('');
  const nameChange = (e) => setName(e.target.value);

  const [phone, setPhone] = useState('');
  const phoneChange = (e) => setPhone(e.target.value);

  const [addr, setAddr] = useState('');
  const addrChange = (e) => setAddr(e.target.value);

  const [email, setEmail] = useState('');
  const emailChange = (e) => setEmail(e.target.value);
  
  const [summary, setSummary] = useState('');
  const summaryChange = (e) => setSummary(e.target.value);

  const [skills, setSkills] = useState('');
  const skillsChange = (e) => setSkills(e.target.value);

  return (
    <div className="App">
      <PDFViewer size="A4">
        <MyDocument name={name} phone={phone} addr={addr} email={email} summary={summary} skills={skills} />
      </PDFViewer>
      <p>Name:</p>
      <input type="text" value={name} onChange={nameChange} />
      <p>Phone:</p>
      <input type="text" value={phone} onChange={phoneChange} />
      <p>Address:</p> 
      <textarea cols="25" rows="4" value={addr} onChange={addrChange} />
      <p>E-mail:</p>
      <input type="text" value={email} onChange={emailChange} />
      <p>Professional Summary:</p> 
      <textarea cols="25" rows="4" value={summary} onChange={summaryChange} />
      <p>Skills:</p> 
      <textarea cols="25" rows="4" value={skills} onChange={skillsChange} />
    </div>
  );
}

export default App;
