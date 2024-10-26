import React from 'react';
import './Job.css';

const jobs = [
    {
        title: "Full Stack Developer (Java, Node, Cloud)",
        company: "IBM",
        rating: 4.1,
        reviews: 20716,
        experience: "1-6 Yrs",
        salary: "Not disclosed",
        location: "Kochi",
        description: "Experience working in cloud native application, working on docker, Kubernetes...",
        tags: ["java", "typescript", "agile methodology", "software development", "travis", "continuous"],
        posted: "8 Days Ago"
    },
    {
        title: "Frontend Developer Intern",
        company: "Google",
        rating: 4.5,
        reviews: 15000,
        experience: "0-1 Yrs",
        salary: "Not disclosed",
        location: "Remote",
        description: "Looking for a passionate frontend developer intern with experience in React...",
        tags: ["react", "javascript", "html", "css", "frontend"],
        posted: "5 Days Ago"
    },
    {
        title: "Data Scientist",
        company: "Microsoft",
        rating: 4.3,
        reviews: 12500,
        experience: "2-5 Yrs",
        salary: "Not disclosed",
        location: "Bangalore",
        description: "Seeking an experienced Data Scientist to join our analytics team...",
        tags: ["python", "machine learning", "data analysis", "statistics"],
        posted: "3 Days Ago"
    }
];

const Job = () => {
    return (
        <div className="job-section">
            <h1 className="section-heading">Job Vacancies</h1>
            <div className="job-listings">
                {jobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <div className="job-header">
                            <div>
                                <div className="job-title">{job.title}</div>
                                <div className="company-info">
                                    <span>{job.company}</span>
                                    <i className="fas fa-star"></i>
                                    <span>{job.rating} | {job.reviews} Reviews</span>
                                </div>
                            </div>
                        </div>
                        <div className="job-details">
                            <div><i className="fas fa-briefcase"></i>{job.experience}</div>
                            <div><i className="fas fa-money-bill-wave"></i>{job.salary}</div>
                            <div><i className="fas fa-map-marker-alt"></i>{job.location}</div>
                        </div>
                        <div className="job-description"><i className="fas fa-file-alt"></i>{job.description}</div>
                        <div className="tags">
                            {job.tags.map((tag, idx) => (
                                <span key={idx}>{tag}</span>
                            ))}
                        </div>
                        <div className="footer">
                            <span>{job.posted}</span>
                            <a href="/index.html">
                                <button className="apply-button">Apply Now</button>
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Job;
