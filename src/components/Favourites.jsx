import { useSelector } from 'react-redux'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Job from './Job'

const Favourites = () =>{
    let favourites = useSelector((state)=>state.favourites.favourites.jobs)
    console.log(favourites)
    return(
        <Container>
            <Row>
            <Col>
                <Link to={"/"}><Button variant="info">Back to Search</Button></Link>
            </Col>
            </Row>
            <Row>
                <Col>
                    {favourites.map((jobData) => (
                        <Job key={jobData._id} data={jobData} favourite={true}/>   
                    ))}
                </Col>
            </Row>
        </Container>
    )
}
export default Favourites