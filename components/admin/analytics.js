import React, { useState, useEffect } from 'react'

import { useAnalyticState, useAnalyticDispatch } from '@/context/analytic'
import { getAnalytics } from '@/actions/analytic'

import Calendar from '@/components/calendar'

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const { analytics, loading } = useAnalyticState()
  const dispatchAnalytics = useAnalyticDispatch()

  useEffect(() => { getAnalytics(dispatchAnalytics) }, [dispatchAnalytics])

  console.log(analytics);

  return <div>
    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>

  </div>
}

export default Analytics
