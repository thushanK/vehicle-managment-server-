const Vehicle = require("../models/User.model");

exports.add = (req, res) => {
    
    const vehicle = new Vehicle({
        Name: req.body.Name,
        NIC: req.body.NIC,
        contactNumber: req.body.contactNumber,
        

    });

    vehicle.save((err, savedVehicle) => {
        if(err) return res.status(401).send(err);

        if(!savedVehicle) return res.status(400).send("Not created");

        return res.status(200).send(savedVehicle);
    });
};

exports.get = (req, res) => {
    Vehicle.find()
        .then( vehicles => {
            res.status(200).send(vehicles);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching the data."
            });
        });
};

exports.update = async (req, res) => {

    if (req.body.id == null || req.body.id == undefined) {
        res.status(400).send({
            message: "Vehicle Number can not be empty!"
        });
        return;
    }

    const {Name, NIC, contactNumber} = req.body;
    console.log(req.body);
    
    await Vehicle.findOne({_id : req.body.id }, (err, foundBul) => {
        if(err) return res.status(401).send(err);

        if(!foundBul) return res.status(404).send("Vehicle not found");

        if(Name){
            foundBul.Name = req.body.Name;
        }
        if(NIC){
            foundBul.NIC = req.body.NIC;
        }
        
        foundBul.save((err, savedBul) => {
            if(err) return res.status(401).send(err);

            if(!savedBul) return res.status(404).send("Not saved");

            return res.status(200).send(savedBul);
        });
    });

};

exports.delete = async (req, res) => {

    console.log(req.params.id);
    
    if (req.params.id == null || req.params.id == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    Vehicle.findOneAndDelete({ _id: req.params.id })
    .then( result => {

        if (!result) {
            throw new Error('No record found')
        }

        res.status(200).send({
            message: "Deleted successfully"
        });
    
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while deleting the data."
        });
    });   
   
}

exports.getOne = async (req, res) => {

    console.log(req);

    try {
        const build = await Vehicle.findOne({ _id: req.params.id });
        return res.status(200).send({
            data: build
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            error: error
        })
    }

}