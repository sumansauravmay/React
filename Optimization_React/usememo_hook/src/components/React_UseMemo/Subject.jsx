import React from "react";

const Subject = ({ marks, subject }) => {
  console.log("subject");
  const percentage = React.useMemo(() => {
    console.log("marks");
    return (marks * 100) / 100;
  }, [marks]);

  return (
    <>
      <h1>My Marks is {marks}</h1>
      <h1>My Percentage is {percentage}%</h1>
      <h1>My Subject is {subject}</h1>
    </>
  );
};

export default React.memo(Subject);
