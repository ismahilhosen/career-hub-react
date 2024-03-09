const getJobApplication = () =>{
    const StoredAppliction = localStorage.getItem("job-application");
    if(StoredAppliction){
        return JSON.parse(StoredAppliction);
    }
    return[]
}

const saveJobApplication = id => {
    const StoredJobapplications = getJobApplication();
    const exet = StoredJobapplications.find(jobid => jobid == id )
    if(!exet){
        StoredJobapplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(StoredJobapplications));
    }
}

export {saveJobApplication, getJobApplication}