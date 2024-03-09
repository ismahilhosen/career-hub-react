import { useEffect } from "react";
import { useState } from "react";
import Feature from "../Feature/Feature";
const FeaturedJobList = () => {
  const [Jobs, setJobs] = useState([]);
  const [DataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold mb-4">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2  gap-8">
        {Jobs.slice(0, DataLength).map((job) => (
          <Feature key={job.id} job={job}></Feature>
        ))}
      </div>
      <div className={DataLength === Jobs.length && "hidden"}>
        <div className="flex justify-center my-6">
          <button
            onClick={() => {
              setDataLength(Jobs.length);
            }}
            className="btn bg-gradient-to-r from-blue to-cyan px-6 mx-auto"
          >
            See All Job
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobList;
