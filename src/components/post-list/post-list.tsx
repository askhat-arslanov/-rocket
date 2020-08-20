import React, { FC, useContext, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import PostItem from '../post-item'
import Spinner from '../spinner'
import ApiServiceContext from '../api-service-context'

interface PostListProps {
  filterValue: string
}
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

const PostList: FC<PostListProps> = ({ filterValue }) => {
  const apiService = useContext(ApiServiceContext)

  const [posts, setPosts] = useState<PostItem[]>([])
  const [filteredPosts, setFilteredPosts] = useState<PostItem[]>([])
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
        setFilteredPosts(posts)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    const filteredPosts = posts.filter(({ title }) => title.includes(filterValue))
    setFilteredPosts(filteredPosts)
  }, [filterValue])

  if (isLoading) return <Spinner />

  if (!filteredPosts.length) return <PostListEmptyMessage>Oops, there are no any posts</PostListEmptyMessage>

  return  (
    <PostListWrapper>
      {filteredPosts.map(({ body, id, title, fullName, nickName }) => (
        <PostItem key={id} title={title} body={body} fullName={fullName} nickName={nickName} />
      ))}
    </PostListWrapper>
  )
}

const mapStateToProps = ({ filter }: { filter: any }) => ({
  filterValue: filter.filterValue
})

export default connect(mapStateToProps)(PostList)

const PostListWrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1.5rem;
`

const PostListEmptyMessage = styled.div`
  padding: 5rem;
  font-size: 2rem;
  color: #eee;
`
