import { useLoaderData } from "react-router-dom";
import { getJobApplication } from "../../Utilitys/SaveToLocalStoage";
import { useEffect, useState } from "react";
import JobApplied from "./JobsApplied/JobApplied";
import { Helmet } from "react-helmet-async";

const Applied = () => {
  const jobs = useLoaderData();
  const [AppliedJobs, setApplidJobs] = useState([]);
  useEffect(() => {
    const StordJob = getJobApplication();
    if (jobs.length > 0) {
      const job = jobs.filter((job) => StordJob.includes(job.id));
      return setApplidJobs(job);
    }
  }, [jobs]);

  return <div className="">
  <Helmet>
    <title>Career Hub | Appied job</title>
  </Helmet>
  <h1 className="text-5xl py-10 text-center font-bold">Applied Jobs</h1>
  <div className="flex flex-col gap-6 mb-6">
    {
      AppliedJobs.map(job => <JobApplied key={job.id} job={job}></JobApplied>)
    }
  </div>
    
  </div>;
};

export default Applied;
