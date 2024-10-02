import React from 'react'
import { Column } from './Column'
import { TaskStore } from '../../store/TaskStore'

export default function Board() {
    const tasks=TaskStore((state)=>state.tasks)
  return (
    <>
      <div className="grid overflow-scroll  h-screen grid-cols-4">

<div>
<Column column='todo'  title='Todo List' status={0} description='deploy your new project in one-click' tasks={tasks}/>
</div>
<div>
<Column column='progress' title='In Progress' status={1} description='deploy your new project in one-click' tasks={tasks}/>
</div>
<div>
<Column column='review' title='In Review' status={2} description='deploy your new project in one-click' tasks={tasks}/>
</div>
<div>
<Column column='complete' title='Complete' status={3} description='deploy your new project in one-click' tasks={tasks}/>
</div>
    
      </div>
    </>
  )
}
