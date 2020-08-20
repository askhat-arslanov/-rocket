import React, { FC, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import PostItem from '../post-item'
import Spinner from '../spinner'
import ApiServiceContext from '../api-service-context'

interface PostItem {
  body: string
  id: number
  title: string
  userId: number
  fullName?: string
  nickName?: string
}

interface UserItem {
  id?: number
  name: string
  username: string
}

const PostList: FC = () => {
  const apiService = useContext(ApiServiceContext)

  const [posts, setPosts] = useState<PostItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    Promise.all([apiService.getPosts(), apiService.getUsers()])
      .then(([postsResponse, usersResponse]) => {
        const posts = postsResponse.map((post: PostItem) => {
          const { userId } = post
          const targetUser: UserItem = usersResponse.find(
            ({ id }: { id: number }) => id === userId
          ) || {
            name: 'Anonymous',
            username: 'Incognito'
          }
          const { name: fullName, username: nickName } = targetUser
          return {
            ...post,
            fullName,
            nickName
          }
        })

        setPosts(posts)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return isLoading ? (
    <Spinner />
  ) : (
    <PostListWrapper>
      {posts.map(({ body, id, title, fullName, nickName }) => (
        <PostItem key={id} title={title} body={body} fullName={fullName} nickName={nickName} />
      ))}
    </PostListWrapper>
  )
}

export default PostList

const PostListWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`
