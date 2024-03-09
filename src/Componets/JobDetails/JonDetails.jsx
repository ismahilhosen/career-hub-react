import { useLoaderData, useParams } from "react-router-dom";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { saveJobApplication } from "../../Utilitys/SaveToLocalStoage";

const JonDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInit = parseInt(id);
  const job = jobs.find((job) => job.id == id);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const hendelApplyjobs = () => {
    saveJobApplication(idInit);
    toast("application added");
  };
  return (
    <div>
      <h1 className="text-5xl py-10 text-center font-bold">Job Details</h1>
      <div className="container grid grid-cols-3">
        <div className="col-span-2">
          <p>
            <span className="font-bold">Job description: </span>
            {job_description}
          </p>
          <p className="my-6">
            <span className="font-bold">Job responsibility: </span>
            {job_responsibility}
          </p>
          <p className="my-6">
            <span className="font-bold mb-5 block">
              Educational requirements:{" "}
            </span>
            {educational_requirements}
          </p>
          <p className="my-6">
            <span className="font-bold mb-5 block">Experiences: </span>
            {experiences}
          </p>
        </div>
        <div className="">
          <div className="">
            <div className="card bg-base-100 border shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl border-b mb-3 pb-4">
                  Job Details
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <MdOutlineCurrencyExchange></MdOutlineCurrencyExchange>
                    <p>
                      <span className="font-bold">Salary: </span>
                      {salary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoCalendarOutline></IoCalendarOutline>

                    <p>
                      <span className="font-bold">Job title: </span>
                      {job_title}
                    </p>
                  </div>
                </div>
                <h2 className="card-title text-xl border-b mb-3 pb-4 mt-3">
                  Contact Information
                </h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <IoCallOutline></IoCallOutline>
                    <p>
                      <span className="font-bold">Phone: </span>
                      {contact_information.phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineMailOutline></MdOutlineMailOutline>

                    <p>
                      <span className="font-bold">Email: </span>
                      {contact_information.email}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <CiLocationOn className="text-2xl"></CiLocationOn>

                    <p>
                      <span className="font-bold">Address: </span>
                      {contact_information.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={hendelApplyjobs}
              className="btn w-full bg-gradient-to-r from-blue to-cyan text-base-100 my-6"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JonDetails;
