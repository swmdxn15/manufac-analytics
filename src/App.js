import React from 'react';
import WineData from './Wine-Data.json';
import LineChart from './LineChart';
import BarChart from './BarChart';


const App = () => {
  const flavanoids = WineData.map(item => item.Flavanoids);

  const ash = WineData.map(item => item.Ash);

  // This code block reduces the WineData array into an object that groups
  // the unique alcohol values with the corresponding minimum magnesium value
  // among all the wines with that alcohol value.
  const alcoholData = WineData.reduce((acc, item) => {
        const index = acc.findIndex(obj => obj.Alcohol === item.Alcohol);
        if (index === -1) {
          acc.push({ Alcohol: item.Alcohol, Magnesium: item.Magnesium });
        } else if (item.Magnesium < acc[index].Magnesium) {
          acc[index].Magnesium = item.Magnesium;
        }
        return acc;
  }, []);

  return (
    <div>
      <h1>Line Chart</h1>
      <LineChart flavAsh={[flavanoids, ash]} />
      <h1>Bar Chart</h1>
      <BarChart alcoholData={alcoholData} />
    </div>
  );
};

export default App;
