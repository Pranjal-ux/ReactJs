import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  const a = useParams();
  console.log(a.id);
  return (
    <div>
      <h1>{a.id}CoursesDetail!!</h1>
    </div>
  );
};

export default CoursesDetail;
