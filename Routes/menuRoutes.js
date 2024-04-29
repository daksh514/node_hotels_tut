const express = require('express');
const router = express.Router();
const menuItem = require(".././models/Menu")


//* Post request to add menu item
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newMenuItem = new menuItem(data);
  
      const response = await newMenuItem.save()
  
      res.status(200).json(response)
  
    } catch (error) {
      console.log(error);
      res.status(500).json(error, 'Server Error')
    }
  })
  

//*Get to get the list of all menu items
router.get('/', async (req, res) => {
    try {
        const data = await menuItem.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error, 'Server Error')
    }
})

module.exports = router;