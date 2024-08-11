
import { Link } from 'react-router-dom'
const LoadMore = ({filterableProject}) => {
  return (
    <div className="load-more"><Link to="/allproject" state={filterableProject} className="themeButton">Load More</Link></div>
  )
}

export default LoadMore
