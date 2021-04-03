import React from "react";

function App() {

  React.useEffect(() => {
    chrome.runtime.onMessage.addListener(action => {
      }
    );
  }, []);
  return null;
}

export default App;
