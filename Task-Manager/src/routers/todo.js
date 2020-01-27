const express = require('express')
const Todo = require('../models/todo')
const router = new express.Router()

router.post('/todos', async (req,res)=>{
  const todo = new Todo(req.body)
  try{
      await todo.save()
      res.status(201).send(todo)
  }
  catch(e){
      res.status(400).send(e)
  }
})


router.get('/todos', async (req,res)=>{
    try{
        const todo= await Todo.find({})
        res.send(todo)
    }
    catch(e){
        res.status(500).send()
    }
})

router.get('/todo/:id',async(req,res)=>{
    const _id = req.params.id;
    try{
        const todo =  await Todo.findById(_id)

        if(!todo){
            return res.status(404).send()
           
            }
            res.send(todo)
    } 
    catch(e){
        res.status(500).send()
    }
 })
 


router.patch('/todo/:id', async(req,res)=>{
    const updates = Object.keys(req.body)
    const allwoedUpdates = ['text']
    const isValidOperation = updates.every((update)=> allwoedUpdates.includes(update))
    if (!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id , req.body ,{new: true, runValidators: true})

        if (!todo){
            return res.status(404).send()
        }
        res.send(todo)
    }
    catch(e){
        res.status(400).send(e)
    }
    
})


router.delete('/todos/:id' , async(req,res)=>{
    try{
        const todo= await Todo.findByIdAndDelete(req.params.id)
        if(!todo){
            return res.status(404).send()
        }
        res.send(todo)
    }
    catch(e){
        res.status(500).send()
    }
})

module.exports= router