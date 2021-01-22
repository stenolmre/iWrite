import React from 'react'

import PoemState from './poem'
import LikeState from './like'
import UserState from './user'
import SubscriberState from './subscriber'

const GlobalState = ({ children }) => {
  return <UserState>
    <PoemState>
      <LikeState>
        <SubscriberState>
          { children }
        </SubscriberState>
      </LikeState>
    </PoemState>
  </UserState>
}

export default GlobalState
