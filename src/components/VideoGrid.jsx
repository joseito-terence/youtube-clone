import React from 'react'
import VideoCard from './VideoCard'
import { Container, Row, Col } from 'react-bootstrap'

export default function VideoGrid() {
  return (
    <Container fluid>
      <Row xs={1} md={2} lg={3} xl={4}>
        {Array.from({ length: 20 }).map((_, idx) => (
          <Col key={idx} className='mb-2'>
            <VideoCard />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
