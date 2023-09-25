import {Link} from 'react-router-dom'

const Home = () => (
  <>
    <h1>home route</h1>
    <ul>
      <Link to="/user">
        <li>navigate to user route</li>
      </Link>
      <Link to="/products">
        <li>navigate to products route</li>
      </Link>
    </ul>
  </>
)

export default Home
