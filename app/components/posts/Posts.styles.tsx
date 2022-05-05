import styled from 'styled-components'

export const PostsContainer = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const TodoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  gap: 15px;
`

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 240px;
  border: 1px solid black;
  border-radius: 5px;
  height: 150px;
  box-shadow: 0px 5px 7px -5px rgb(0 0 0 / 75%);
  align-items: stretch;
  h1 {
    color: blue;
  }
  h2 {
    color: red;
  }
  h3 {
    margin-top: auto;
    font-weight: bold;
  }
`
