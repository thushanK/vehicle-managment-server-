const Vehicle = require("../models/Vehicle.model");

exports.add = (req, res) => {
    
    const vehicle = new Vehicle({
        vehicleNumber: req.body.vehicleNumber,
        vehicleType: req.body.vehicleType,
        vehicleChaseNumber: req.body.vehicleChaseNumber,
        vehicleEngineNumber: req.body.vehicleEngineNumber,
        manufactureDate: req.body.manufactureDate,
        vehicleColor: req.body.vehicleColor,
        vehiclePurchaseDate: req.body.vehiclePurchaseDate,
        vehicleOpenMileage: req.body.vehicleOpenMileage,
        insuranceType: req.body.insuranceType,
        vehicleRegisteredDistrict: req.body.vehicleRegisteredDistrict,
        nextLicenseRenewalDate: req.body.nextLicenseRenewalDate,
        vehiclePreviousOwner: req.body.vehiclePreviousOwner,
        NIC: req.body.NIC,
        contactNumber: req.body.contactNumber,
        address: req.body.address,
        // allocation: req.body.allocation,
        // employeeName: req.body.employeeName,
        // employeeContact: req.body.employeeContact,

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

    const {vehicleNumber, vehicleType, vehicleChaseNumber, vehicleEngineNumber, manufactureDate, vehicleColor, vehiclePurchaseDate, vehicleOpenMileage, insuranceType, vehicleRegisteredDistrict, nextLicenseRenewalDate, vehiclePreviousOwner, NIC, contactNumber,  address} = req.body;
    console.log(req.body);
    
    await Vehicle.findOne({_id : req.body.id }, (err, foundBul) => {
        if(err) return res.status(401).send(err);

        if(!foundBul) return res.status(404).send("Vehicle not found");

        if(vehicleNumber){
            foundBul.vehicleNumber = req.body.vehicleNumber;
        }
        if(vehicleType){
            foundBul.vehicleType = req.body.vehicleType;
        }
        if(vehicleChaseNumber){
            foundBul.vehicleChaseNumber = req.body.vehicleChaseNumber;
        }
        if(vehicleEngineNumber){
            foundBul.vehicleEngineNumber = req.body.vehicleEngineNumber;
        }
        if(manufactureDate){
            foundBul.manufactureDate = req.body.manufactureDate;
        }
        if(vehicleColor){
            foundBul.vehicleColor = req.body.vehicleColor;
        }
        if(vehiclePurchaseDate){
            foundBul.vehiclePurchaseDate = req.body.vehiclePurchaseDate;
        }
        if(vehicleOpenMileage){
            foundBul.vehicleOpenMileage = req.body.vehicleOpenMileage;
        }
        if(insuranceType){
            foundBul.insuranceType = req.body.insuranceType;
        }
        if(vehicleRegisteredDistrict){
            foundBul.vehicleRegisteredDistrict = req.body.vehicleRegisteredDistrict;
        }
        if(nextLicenseRenewalDate){
            foundBul.nextLicenseRenewalDate = req.body.nextLicenseRenewalDate;
        }
        if(vehiclePreviousOwner){
            foundBul.vehiclePreviousOwner = req.body.vehiclePreviousOwner;
        }
        if(NIC){
            foundBul.NIC = req.body.NIC;
        }
        if(contactNumber){
            foundBul.contactNumber = req.body.contactNumber;
        }
        if(address){
            foundBul.address = req.body.address;
        }
        // if(allocation){
        //     foundBul.allocation = req.body.allocation;
        // }
        // if(employeeName){
        //     foundBul.employeeName = req.body.employeeName;
        // }
        // if(employeeContact){
        //     foundBul.employeeContact = req.body.employeeContact;
        // }

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