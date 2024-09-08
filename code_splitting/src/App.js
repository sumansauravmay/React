
import React, { Suspense } from 'react';
let Home=React.lazy(()=>import("./components/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home/>
     </Suspense>
  );
}

export default App;
