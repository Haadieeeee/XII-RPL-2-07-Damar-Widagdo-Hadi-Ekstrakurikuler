const User = require('../models/User')

module.exports = {
    // get all users
    index: async (req, res) => {
        try {
            const users =  await User.find()
            if(users.length > 0){
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            }else{  
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }   
        } catch (error) {
            res.status(400).json({sucess: false})
        }   
        
      },
      // get a user
      show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil didapat"
            })

        } catch (error) {
            res.status(400).json({success: false})
        }
      },
      store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map(err => err.message);
                res.status(400).json({ success: false, errors });
            } else {
                res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        }
    },
    
    update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil diubah"
            })
    
        } catch (error) {
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errors = Object.values(error.errors).map(err => err.message);
                res.status(400).json({ success: false, errors });
            } else {
                res.status(500).json({ success: false, message: "Internal Server Error" });
            }
        }
    },
    
      delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({success: false})
        }
    },

}