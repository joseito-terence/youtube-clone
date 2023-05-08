import React from 'react'
import { Card, Image } from 'react-bootstrap'
import styled from '@emotion/styled'
import { AiFillCheckCircle } from 'react-icons/ai'

const data = {
  title: 'Survived Minecraft on 0.01 health',
  thumbnail: 'https://images.unsplash.com/photo-1683219390820-02c6fc5243ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  channel: {
    name: 'Bionic',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  views: '2.5M',
  link: 'https://www.youtube.com/watch?v=Wc9UdcPqdPw'
}

export default function VideoCard() {
  return (
    <a href={data.link} className='text-reset text-decoration-none'>
    <Card className='border-0'>
      <Thumbnail variant="top" src={data.thumbnail} />
      <Card.Body className='d-flex gap-2'>
        <Image
          src={data.channel.image} alt={data.channel.name}
          className='rounded-circle'
          style={{
            objectFit: 'cover',
            width: 36,
            height: 36
          }}
        />
        <div>
          <Card.Title className='fs-6 mb-0'>{data.title}</Card.Title>
          <Card.Text className='mb-0'>
            {data.channel.name}
            <AiFillCheckCircle className='ms-1 text-muted' />
          </Card.Text>
          <Card.Text className='text-muted' style={{ fontSize: '.8rem' }}>
            {`${data.views} views • 5 months ago`}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
    </a>
  )
}

const Thumbnail = styled(Card.Img)`
  border-radius: 20px;
  transition: border-radius 500ms ease;
  &:hover {
    border-radius: 0;
  }
`
