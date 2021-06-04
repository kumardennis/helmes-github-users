import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Tooltip from '@material-ui/core/Tooltip'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import LockIcon from '@material-ui/icons/Lock'
import appStore from 'store'
import { view } from '@risingstack/react-easy-state'
import ReactNotification, { store } from 'react-notifications-component'
import './styles.scss'

const AuthModal = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    appStore.githubToken = value
    handleClose()
  }

  const handleUnauthorize = () => {
    appStore.githubToken = ''
  }

  return (
    <div className="auth-modal">
      {appStore.githubToken === '' ? (
        <Tooltip title="Authorize with github token to access more calls!">
          <LockOpenIcon className="auth-modal-toggle" onClick={handleOpen} />
        </Tooltip>
      ) : (
        <Tooltip title="Unauthorize">
          <LockIcon className="auth-unauthorize" onClick={handleUnauthorize} />
        </Tooltip>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="auth-modal-toggle"
      >
        <div className="auth-modal-content">
          <input
            type="password"
            className="auth-input"
            onChange={handleChange}
            value={value}
          />

          <button onClick={handleClick} className="btn">
            Authorize
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default view(AuthModal)
