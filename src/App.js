import React, { useEffect, useState } from 'react';
import './App.css';
import component1 from './components/component1';
import component2 from './components/component2';
import component3 from './components/component3';
import component4 from './components/component4';

const componentNames = {
  component1,
  component2,
  component3,
  component4
}

function App() {
  const [records, setRecords] = useState([
    { key: "component1", name: "Component 1", data: [] },
    { key: "component2", name: "Component 2", data: [] },
    { key: "component3", name: "Component 3", data: [] },
    { key: "component4", name: "Component 4", data: [] }
  ])
  let componentMap = componentNames;

  const handleDynamicComponent = () => {
    records.length > 0 && records.map((ele) => {
      const DynamicComponent = componentMap[ele.key]
      ele.component = (
        <DynamicComponent
          data={ele.data}
          key={ele.data}
        />
      );
    })
  }

  useEffect(() => {
    handleDynamicComponent()
  }, [records])

  return (
    <>
      <h1 style={{ textAlign: "center" }} >Dynamic Component</h1>
      <h3 style={{ textAlign: "center" }} >This is how we can show dynamic components</h3>
      <div className="App">
        <br />
        {
          records.map((item) =>
            <div class="card">
              <div class="container">
                <h4><b>{item.component}</b></h4>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default App;
