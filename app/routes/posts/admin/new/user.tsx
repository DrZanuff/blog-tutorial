import { useEffect } from 'react'
import type { ActionFunction } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json()
  return JSON.stringify({ response: `Here is your data: ${data}` })
}

export default function User() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(`/posts/admin/new`)
      console.log('RESPONSE', response)
      const data = await response.json()
      console.log('DATA', data)
    }

    getData()
  }, [])

  return (
    <div>
      <ul>
        <li>User</li>
      </ul>
    </div>
  )
}
