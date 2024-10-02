import React from 'react'
import { Column } from './Column'
import { TaskStore } from '../../store/TaskStore'
import { BunBarrel } from '../BunBarrel'

export default function Board() {
    const tasks=TaskStore((state)=>state.tasks)
    const setCards=TaskStore((state)=>state.setCards)
  return (
    <>
      <div className="grid overflow-scroll  h-screen grid-cols-4 gap-2">

<div>
<Column setCards={setCards} column='todo'  title='Todo List' status={0} description='deploy your new project in one-click' tasks={tasks}/>
</div>
<div>
<Column setCards={setCards} column='progress' title='In Progress' status={1} description='deploy your new project in one-click' tasks={tasks}/>
</div>
<div>
<Column setCards={setCards} column='review' title='In Review' status={2} description='deploy your new project in one-click' tasks={tasks}/>
</div>
<div>
<Column setCards={setCards} column='complete' title='Complete' status={3} description='deploy your new project in one-click' tasks={tasks}/>
</div>
      </div>
    </>
  )
}
