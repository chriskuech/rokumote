import React from 'react';
import Remote from 'components/Remote';
import RokuSelector from './RokuSelector';
import TV from './TV';
import { RokuContext } from 'components/RokuContext';

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
};

const App: React.FC = () => {
  return (
    <div className="App" style={style}>
      <RokuContext>
        <Remote />
        <div style={{ position: "absolute", bottom: 0, left: 0 }}>
          <RokuSelector />
        </div>
        <div style={{ position: "absolute", top: "10%", right: 0 }}>
          <TV />
        </div>
      </RokuContext>
    </div>
  );
}

export default App;
