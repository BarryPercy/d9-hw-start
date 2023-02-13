import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Job from './Job'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { getJobs } from '../redux/actions'
import JobList from './JobList'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const storeJobs = useSelector((state) => state.jobs.jobList)
  const dispatch = useDispatch()
  const [fetched,setFetched] = useState(false)

  const baseEndpoint ="https://strive-benchmark.herokuapp.com/api/jobs?search=" 

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobs(baseEndpoint,query))
  }

  useEffect(() => {
    console.log(storeJobs)
  },[storeJobs]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={9} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={3} className="mx-auto mb-5">
            <Link to={"/favourites"}><Button variant="info">Favourites</Button></Link>
          
        </Col>
        <Col xs={10} className="mx-auto mb-5">
        {storeJobs!=[]&&storeJobs.map((jobData) => (
                    <Job key={jobData._id} data={jobData}/>
                ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
