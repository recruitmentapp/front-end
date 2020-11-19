import React from 'react'
import { useHistory } from 'react-router-dom'

const ApplicantCard = ({ applicant }) => {
    const history = useHistory()

    return (
        <div onClick={() => {history.push(`/users/${applicant.id}`)}}>
            <h3>{applicant.name}</h3>
            <p>{applicant.jobTitle}</p>
        </div>
    )
}

export default ApplicantCard
