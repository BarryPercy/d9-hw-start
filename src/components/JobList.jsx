import Job from './Job'

const JobList = (props)=>{
        return(
            <>
                {props.list.map((jobData) => (
                    <Job key={jobData._id} data={jobData}/>
                ))}
            </>
        )
}

export default JobList