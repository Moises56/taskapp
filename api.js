const API = 'https://backendapp-mtlt.onrender.com/api'

/**
 * Get all tasks from the API
 */
export const getTasks = async () => {
    const res = await fetch(API + "/tasks")
    // console.log('res', res)
    return await res.json()
}

/**
 * Create a new task
 */
export const createTask = async (newTask) => {
    const res = await fetch(API + "/tasks", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    return await res.json()
}

/**
 * Delete a task
 */
export const deleteTask = async (id) => {
    const res = await fetch(`${API}/tasks/${id}`, {
        method: 'DELETE'
    })
    return await res.json()
}

/**
 * Get a task by ID
 */
export const getTask = async (id) => {
    const res = await fetch(`${API}/tasks/${id}`)
    return await res.json()
}

/**
 * Update a task
 */
export const updateTask = async (id, task) => {
    const res = await fetch(`${API}/tasks/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    return await res.json()

}