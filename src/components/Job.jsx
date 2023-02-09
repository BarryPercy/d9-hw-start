import { Row, Col, Button, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

const Job = (props) => {
  const [favourite,setFavourite] = useState(false);

  useEffect(() => {
		if(props.favourite){
      setFavourite(true)
    }
	}, [])
  const dispatch = useDispatch()
  const toggleFavourite=()=>{
    if(favourite){
      console.log("deleting favourite!", props.data._id)
      dispatch({
        type: 'REMOVE_FROM_FAVOURITES',
        payload: props.data._id,
      })
      setFavourite(false)
    }else{
      dispatch({
        type: 'ADD_TO_FAVOURITES',
        payload: props.data,
      })
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
      <Button
                  variant={favourite ? "danger": props.favourite ? "danger":"primary"}
                  onClick={() => {
                    toggleFavourite(this)
                  }}
                >
                  {props.favourite ? <FaTrash />:<AiFillHeart/>}
                </Button>
      </Col>
    </Row>
  )
}

export default Job
