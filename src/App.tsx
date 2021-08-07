import React from 'react';
import Clock from './components/clock/clock';

const AppChild1: React.FC<{}> = (params) => {
  return (
    <>
      <h1>Hello from React component</h1>
      <React.Suspense fallback='Loading some component...'>
        <Clock></Clock>
      </React.Suspense>
    </>
  );
}

export default AppChild1;
