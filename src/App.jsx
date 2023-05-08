import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <Container fluid style={{ marginTop: 62 }}>
        <Row>
          <Col xs={1} lg={2} className='p-0'>
            <Sidebar />
          </Col>
          <Col xs={11} lg={10} className='p-0'>
            <main>
              <Categories />
              <VideoGrid />
            </main>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
