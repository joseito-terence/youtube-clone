import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { AiFillHome, AiOutlineHistory } from 'react-icons/ai'
import { MdOutlineAppShortcut } from 'react-icons/md'
import { BsCameraVideo } from 'react-icons/bs'
import { BiLibrary } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'

const LINKS = [
  { name: 'Home', icon: AiFillHome },
  { name: 'Shorts', icon: MdOutlineAppShortcut },
  { name: 'Subscriptions', icon: BsCameraVideo },
  { name: 'Library', icon: BiLibrary },
  { name: 'History', icon: AiOutlineHistory },
]

export default function Sidebar() {
  const isMobile = useMediaQuery({ maxWidth: 992 })

  return (
    <Container fluid
      style={{ background: '#ebe4e4a3', minHeight: '100vh' }}
      className='p-3'
    >
      <Row className='gap-2'>
        {LINKS.map((link, idx) => (
          <a href={`https://www.youtube.com/results?search_query=${link.name}`} target='_blank'
            key={idx}
            className={`btn btn-${idx == 0 ? 'dark' : 'light'} d-flex align-items-center gap-2`}
            style={{ textAlign: 'left', justifyContent: isMobile ? 'center' : 'left' }}
          >
            <link.icon size={isMobile ? 25 : 18} />
            <span style={{ display: isMobile ? 'none' : 'inline' }}>{link.name}</span>
          </a>
        ))}
      </Row>
    </Container>
  )
}
