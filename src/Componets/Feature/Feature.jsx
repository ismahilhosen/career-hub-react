import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const Feature = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl border border-drak-2">
        <figure className="self-start px-4 pt-4 mt-4 ml-4">
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body gap-1 mx-4">
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

          <div className="card-actions justify-start my-4">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary bg-gradient-to-r from-blue to-cyan">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Feature.propTypes = {
  job: PropTypes.object,
};

export default Feature;
