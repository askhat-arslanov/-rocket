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
          const { name, username } = targetUser
          return {
            ...post,
            name,
            username
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
      {posts.map(({ body, id, title }) => (
        <PostItem key={id} title={title} body={body} />
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
