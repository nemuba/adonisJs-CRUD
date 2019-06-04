'use strict'

class StoreTask {
  get rules () {
    return {
      // validation rules
      title: 'required|min:5|max:140',
      body: 'required|min:10|max:140'
    }
  }
  get messages(){
    return{
      'title.required': ' is required',
      'title.min': ' min 5',
      'title.max': ' max 140',
      'body.required': ' is required',
      'body.min': ' min 10',
      'body.max': ' max 140',
    }
  }
}

module.exports = StoreTask
