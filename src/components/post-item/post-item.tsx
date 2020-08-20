import React, { FC } from 'react'
import styled from 'styled-components'


interface PostItemProps {
  title: string
  body: string
}

const PostItem: FC<PostItemProps> = ({ title, body }) => {
  return (
    <PostItemWrapper>
      <PostItemBackground
        src={`https://source.unsplash.com/random/400x300?sig=${getRandomNumber()}`}
        alt="Background"
      />

      <PostItemTitle>{title}</PostItemTitle>

      <PostItemBody>{body}</PostItemBody>
    </PostItemWrapper>
  )
}

export default PostItem

// Helpers
function getRandomNumber() {
  return Math.floor(Math.random() * 100)
}

// Styles
const PostItemWrapper = styled.article`
  position: relative;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  color: #333;
  text-align: left;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`

const PostItemBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  filter: brightness(0.8);
`

const PostItemTitle = styled.h6`
  position: relative;
  display: inline-block;
  font-weight: 100;
  font-size: 1.2rem;
  font-family: 'Comfortaa', sans-serif;
  margin-bottom: 1rem;
  padding: 0.5rem;
  z-index: 5;
  background-color: rgba(240, 212, 56, 0.9);
  font-weight: 600;
  border-radius: 2px;
`

const PostItemBody = styled.p`
  position: relative;
  display: block;
  font-size: 0.9rem;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.5rem;
  border-radius: 2px;
`
