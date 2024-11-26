// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <div className="responsive-container">
      <h1 className="heading">Alert Notifications</h1>
      <div className="notifications-container">
        <Notification>
          <div className="content">
            <AiFillCheckCircle className="success icons" />
            <div>
              <h2 className="success notification-heading">Success</h2>
              <p className="notification-description">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="content">
            <RiErrorWarningFill className="error icons" />
            <div>
              <h2 className="error notification-heading">Error</h2>
              <p className="notification-description">
                Sorry, You are not Authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="content">
            <MdWarning className="warning icons" />
            <div>
              <h2 className="warning notification-heading">Warning</h2>
              <p className="notification-description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="content">
            <MdInfo className="info icons" />
            <div>
              <h2 className="info notification-heading">Info</h2>
              <p className="notification-description">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </div>
)
export default AlertNotifications
