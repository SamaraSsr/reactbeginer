const jobs = [
  {
    name: "junior Developer",
    salary: `22$`,
  },
  {
    name: "Senior Developer",
    salary: `42$`,
  },
  {
    name: "Devops",
    salary: `32$`,
  },
  {
    name: "Team Lead",
    salary: `52$`,
  },
];
const Careers = () => {
  return (
    <>
      {jobs.map((job) => (
        <div>
          <h1>Job Name: {job.name}</h1>
          <p>Job Salary: {job.salary}</p>
        </div>
      ))}
    </>
  );
};

export default Careers;
