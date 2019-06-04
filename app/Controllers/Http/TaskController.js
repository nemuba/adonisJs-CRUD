'use strict'

const Task = use('App/Models/Task')


class TaskController {

  /**
   * Display a listing of the resource.
   */
  async index({view}) {
     const tasks =  await Task.all()
      return view.render('tasks/index',{
        title: "Latest Tasks",
        tasks: tasks.toJSON()
      });
  }

  /**
   * Store a newly created resource in storage.
   */
  async store ({ request, response, session }){

    const task = new Task()

    task.title = request.input('title')
    task.body = request.input('body')

    await task.save()

    session.flash({ notification: 'Task add success!' })

    return response.redirect('/tasks')
  }

  async detail({ params, view}){
    const task = await Task.find(params.id)

    return view.render('tasks/detail',{
      task: task.toJSON()
    })
  }

  async remove({params, response, session}){
    const task = await Task.find(params.id)

    await task.delete()

    session.flash({ notification: 'Task removed!' })

    return response.redirect('/tasks')
  }


}

module.exports = TaskController
