# React Todo List App with Vite and Tailwind CSS

A feature-rich todo list application built with React, Vite, and Tailwind CSS that includes task management, filtering, sorting, and localStorage persistence.

## Features

- Add, delete, and mark tasks as complete
- Filter tasks (All/Active/Completed)
- Sort tasks (None/Date/Alphabetical)
- LocalStorage persistence
- Responsive design
- Task counter
- Input validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhumikapatil22/TodoList-Celebal-Task.git
2. cd TodoList-Celebal-Task
3. npm install
4. npm run dev
5. Open http://localhost:5173 in your browser.

### Testing Guide

### 1. Task Management

#### i) Add Task
- **Action**: Type a task and click "Add" or press Enter  
  **Expected**: Task appears in the list
- **Action**: Try adding an empty task  
  **Expected**: Shows validation error

#### ii) Complete Task
- **Action**: Click the checkbox  
  **Expected**: 
  - Task shows strikethrough styling
  - Counter updates correctly

#### iii) Delete Task
- **Action**: Click "Delete"  
  **Expected**: Task is removed from the list

### 2. Filtering
- **Action**: Switch between "All"/"Active"/"Completed"  
  **Expected**: Only shows tasks matching selected filter

### 3. Sorting
- **Date**: Tasks ordered oldest → newest
- **Alphabetical**: Tasks ordered A → Z
- **None**: Maintains original task order
