import React from 'react'

import PoemState from './poem'
import LikeState from './like'
import UserState from './user'
import SubscriberState from './subscriber'
import AnalyticState from './analytic'

const GlobalState = ({ children }) => {
  return <UserState>
    <PoemState>
      <LikeState>
        <SubscriberState>
          <AnalyticState>
            { children }
          </AnalyticState>
        </SubscriberState>
      </LikeState>
    </PoemState>
  </UserState>
}

export default GlobalState
