import { useParams } from "react-router-dom";

const CourseDetails = () => {
    const params = useParams()
  return (
    <div>
      <h1>{params.courseid} CourseDetails</h1>
    </div>
  );
};

export default CourseDetails;