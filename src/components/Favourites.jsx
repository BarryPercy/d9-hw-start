import { useSelector, useDispatch } from 'react-redux'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Job from './Job'

const Favourites = () =>{
    let favourites = useSelector((state)=>state.favourites.jobs)
    console.log(favourites)
    const dispatch = useDispatch()
    return(
        <Container>
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