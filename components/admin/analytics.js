import React, { useState, useEffect } from 'react'

import { useAnalyticState, useAnalyticDispatch } from '@/context/analytic'
import { getAnalytics } from '@/actions/analytic'

import Calendar from '@/components/calendar'

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const { analytics, loading } = useAnalyticState()
  const dispatchAnalytics = useAnalyticDispatch()

  useEffect(() => { getAnalytics(dispatchAnalytics) }, [dispatchAnalytics])

  return <div>
    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
    <div className="analytics_page_content">
      <h3>Views at {selectedDate.toLocaleDateString()}: <span>{analytics && analytics.filter(el => (new Date(el.createdAt).toLocaleDateString()).includes(selectedDate.toLocaleDateString())).length}</span></h3>
    </div>
  </div>
}

export default Analytics
