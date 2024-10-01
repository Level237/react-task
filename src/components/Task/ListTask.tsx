import React from 'react'
import { CardTask } from '../ui/cardTask'

export default function ListTask() {
  return (
    <div className='flex flex-col gap-3'>
        <CardTask bgTask='#1271ff41' 
        title='Move down'
        priority='urgent'
        color="#1271ff" 
        content='Manage men sevent game,let me down,let me see you please'
        status={0}

        />
      
      <CardTask bgTask='#1271ff41' 
        title='Move down'
        priority='non urgent'
        color="#1271ff" 
        content='Manage men sevent game,let me down,let me see you please'
        status={1}

        />
    </div>
  )
}
