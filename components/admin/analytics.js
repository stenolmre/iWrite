import React, { useState } from 'react'

import Calendar from '@/components/calendar'

const Analytics = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return <div>
    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
  </div>
}

export default Analytics
