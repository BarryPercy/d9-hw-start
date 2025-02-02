import { Row, Col, Button, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { addToFavourites, removeFromFavourites } from '../redux/actions'

const Job = (props) => {
  let jobs = useSelector((state) => state.favourites.favourites.jobs)
  const [favourite,setFavourite] = useState(false);
  const [mounted,setMounted] = useState(false);
  let isFavourite = jobs.some(job=>job._id===props.data._id)
  

  useEffect(() => {
		if (isFavourite){
      setFavourite(true);
    }else{
      setFavourite(false);
    }
    setMounted(true);
	}, [])
  const dispatch = useDispatch()
  const toggleFavourite=()=>{
    if(favourite){
      dispatch(removeFromFavourites(props.data._id))
      setFavourite(false)
    }else{
      dispatch(addToFavourites(props.data))
      setFavourite(true)
    }
  }

  return(
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${props.data.company_name}`}>{props.data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={props.data.url} target="_blank" rel="noreferrer">
          {props.data.title}
        </a>
      </Col>
      <Col xs={3}>
      {mounted&&<Button
                  variant={favourite ? "danger": "primary"}
                  onClick={() => {
                    toggleFavourite(this)
                  }}
                >
                  {props.favourite ? <FaTrash />:<AiFillHeart/>}
                </Button>}
      </Col>
    </Row>
  )
}

export default Job
