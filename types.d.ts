type state = 'toDo' | 'inProgress' | 'done'
type typeOfItem = 'project' | 'spring' | 'task' | 'reminder' | 'img' | 'video' | 'audio' | 'link'

export interface User {
  id: number
  name: string
  email: string
  password: string
  items: Item[]
}

export interface Item {
  id: number
  x: number
  y: number
  w: number
  h: number
  minW?: number
  minH?: number
  type?: typeOfItem // Añadir type como propiedad común
}

export interface Tag{
    id: number
    name: string
    color: string
}

export interface Project {
  id: number
  name: string
  description: string
  image: string
  tags: Tag[]
  spring?: Spring[]
}



interface Spring {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  state: state
  tasks?: Task[]
}

interface Task {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  state: state
  reminders: Reminder[]
  board: Board
  tags: string[]
}

interface Board {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  state: state
  items: Item[]
}

interface Reminder {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  state: state
}

interface Img {
  id: number
  name: string
  description: string
  url: string
}

interface Video {
  id: number
  name: string
  description: string
  url: string
}

interface Audio {
  id: number
  name: string
  description: string
  url: string
}

interface Link {
  id: number
  name: string
  description: string
  url: string
}

export type ProjectItem = {
  type: 'project' // Discriminante de tipo
  data: Project
} & Item

export type SpringItem = {
  type: 'spring' // Discriminante de tipo
  data: Spring
} & Item

export type TaskItem = {
  type: 'task' // Discriminante de tipo
  data: Task
} & Item

export type ReminderItem = {
  type: 'reminder' // Discriminante de tipo
  data: Reminder
} & Item

export type ImgItem = {
  type: 'img' // Discriminante de tipo
  data: Img
} & Item

export type VideoItem = {
  type: 'video' // Discriminante de tipo
  data: Video
} & Item
