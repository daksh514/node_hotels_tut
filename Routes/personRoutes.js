const express = require('express');
const router = express.Router();
const person = require(".././models/Person");





//Person post method
router.post("/", async function (req, res) {
    try {
      const data = req.body;
  
      const newPerson = new person(data);
  
      const response = await newPerson.save()
      console.log('data saved');
      res.status(200).json(response)
    } catch (error) {
      console.log(error);
      res.status(500).json(error, 'Server Error')
    }
  });
  

//*Person get method
  router.get("/", async (req, res)=>{
    try {
      const data = await person.find()
      res.json(data)
    } catch (error) {
      res.status(500).json('Server Error')
    }
  })


//*Person custom post method for workType
  router.get(`/:workType`, async function (req, res) {
    const workType = req.params.workType;
    if(workType === "chef" || workType === "manager" || workType === "waiter"){
      try {
        let list = await person.find({work: workType})
        res.status(200).json(list)
      } catch (error) {
        res.status(500).json(error, 'Server Error')
      }
    } else{
      res.status(500).json('A valid workType not entered')
    }
  })
  
router.put('/:id', async function (req, res) {
    try {
        const id = req.params.id
        const updatedPersonData = req.body;

        const response = await person.findByIdAndUpdate(id, updatedPersonData, {
            new: true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error, 'Server Error')
    }
})

router.delete('/:id', async function (req, res) {
    try {
        const id = req.params.id
        const response = await person.findByIdAndDelete(id)

        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }

        res.status(200).json('Person deleted successfully')
    } catch (error) {
        res.status(500).json(error, 'Server Error')
    }
})

  module.exports = router;