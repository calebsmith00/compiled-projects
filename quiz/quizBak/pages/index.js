import Session from '../features/session/Session'
import Link from 'next/link'
import runQuery from '../sql/config.js'

export default function Home() {
  //runQuery('SELECT * FROM users').then(data => console.log(data));
  return (
  <div>
    <h1>Welcome home</h1>

    <Link href="/auth/login">
      <a>Login</a>
    </Link>
  </div>
  )
}