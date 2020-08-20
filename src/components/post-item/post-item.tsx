import React, { FC } from 'react'
import styled from 'styled-components'

interface PostItemProps {
  title: string
  body: string
  fullName?: string
  nickName?: string
}

const PostItem: FC<PostItemProps> = ({ title, body, fullName, nickName }) => {
  return (
    <PostItemWrapper>
      <PostItemBackground
        src={`https://source.unsplash.com/random/400x300?sig=${getRandomNumber()}`}
        alt="Background"
      />

      <PostItemTitle>{title}</PostItemTitle>

      <PostItemBody>{body}</PostItemBody>

      <PostItemAuthor>by {fullName} ({nickName})</PostItemAuthor>
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

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    z-index: 2;
    background: linear-gradient(to right bottom, rgba(66, 181, 245, 0.6), rgba(85, 218, 200, 0.6));
    border-radius: 3px;
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
  background-color: rgba(240, 212, 56, 0.8);
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
  margin-bottom: 1rem;
`

const PostItemAuthor = styled.span`
  position: relative;
  display: inline-block;
  z-index: 5;
  margin-left: -1rem;
  padding: 2px 5px 2px 21px;
  background: #eeeeeeab;
  border-radius: 0 3px 3px 0;
`
