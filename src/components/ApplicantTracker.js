import React from 'react'
import ApplicantCard from './ApplicantCard'


const ApplicantTracker = ({ job }) => {

    return (
        <div className='applicants'>
            <div className='app-column'>
                <h2>Applied</h2>
                {job.applied.map((applicant) => {
                    <ApplicantCard applicant={applicant} />
                })}
            </div>
            <div className='app-column'>
                <h2>Interview One</h2>
                {job.int1.map((applicant) => {
                    <ApplicantCard applicant={applicant} />
                })}
            </div>
            <div className='app-column'>
                <h2>Interview Two</h2>
                {job.int2.map((applicant) => {
                    <ApplicantCard applicant={applicant} />
                })}
            </div>
            <div className='app-column'>
                <h2>References</h2>
                {job.references.map((applicant) => {
                    <ApplicantCard applicant={applicant} />
                })}
            </div>
            <div className='app-column'>
                <h2>Offers</h2>
                {job.offered.map((applicant) => {
                    <ApplicantCard applicant={applicant} />
                })}
            </div>
            <div className='app-column'>
                <h2>Accepted</h2>
                {job.accepted.map((applicant) => {
                    <ApplicantCard applicant={applicant} />
                })}
            </div>
        </div>
    )
}

export default ApplicantTracker
