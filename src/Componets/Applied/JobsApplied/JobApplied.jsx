import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const JobApplied = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    job_type,
    remote_or_onsite,
    salary,
  } = job;
  return (
    <div className="container">
      <div className="card card-side bg-base-100 shadow-xl p-6 border border-drak-2">
        <figure className="w-38">
          <img src={logo} />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="mt-2">
            <button className="btn rounded-lg border-blue border bg-transparent mr-4 hover:bg-blue hover:text-drak-1">
              {remote_or_onsite}
            </button>
            <button className="btn rounded-lg border-blue border bg-transparent hover:bg-blue hover:text-drak-1">
              {job_type}
            </button>
            <div className="flex gap-2 mt-2">
              <div className="flex items-center gap-1">
                <CiLocationOn />
                <p>
                  <small className="text-sm">{location}</small>
                </p>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineCurrencyExchange />
                <p>
                  <small className="text-sm">{salary}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions items-center">
          <Link to={`../job/${id}`}>
            <button className="btn bg-gradient-to-r from-blue to-cyan">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
JobApplied.propTypes = {
  job: PropTypes.object,
};

export default JobApplied;
