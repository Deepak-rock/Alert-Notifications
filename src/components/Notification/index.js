// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification">
      {children}
      <GrFormClose className="close-icons" />
    </div>
  )
}
export default Notification
