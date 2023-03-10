const studentModel = require("../Models/studentsModel")
const { isValid, isValidEmail, isValidName, captilize, isValidMobile, isValidPincode, isVaildPass, IsValidDate, isValidStr } = require("../validators/validators")


const registorStduents = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "plese Enter All required fields" })
        const { firstName, lastName, mobile, age, standerd, gender, email, password, address, pinCode } = data

        if (!firstName) return res.status(400).send({ status: false, message: "firstName is Required" })
        if (!isValidName(firstName.trim())) return res.status(400).send({ status: false, message: "Plese Enter Valid FirstName" })
        data.firstName = captilize(firstName)

        if (!lastName) return res.status(400).send({ status: false, message: "lasrName is Required" })
        if (!isValidName(lastName.trim())) return res.status(400).send({ status: false, message: "Plese Enter Valid lasrName" })
        data.listName = captilize(lastName)

        if (!age) return res.status(400).send({ status: false, message: "age is Required" })
        if (age < 5 || age > 30) return res.status(400).send({ status: false, message: "Plese enter valid age" })

        if (!standerd) return res.status(400).send({ status: false, message: "standerd is Required" })
        if (standerd < 1 || standerd > 12) return res.status(400).send({ status: false, message: "Plese Enter Valid standerd between 1 to 12" })

        if (!gender) return res.status(400).send({ status: false, message: "age is Required" })
        if (!["M", "F"].includes(gender.trim())) return res.status(400).send({ status: false, message: "Plese Enter Valid  gender M or F" })

        if (!mobile) return res.status(400).send({ status: false, message: "Mobile No. is Required" })
        if (!isValidMobile(mobile)) return res.status(400).send({ status: false, message: "Plese Enter Valid Mobile Number" })
        const findNumber = await studentModel.findOne({ mobile: mobile })
        if (findNumber) return res.status(400).send({ status: false, message: "User allredy exisrt with this Number" })

        if (!email) return res.status(400).send({ status: false, message: "email is Required" })
        if (!isValidEmail(email.trim())) return res.status(400).send({ status: false, message: "Plese Enter Valid Email Id" })
        const findEmail = await studentModel.findOne({ email: email })
        if (findEmail) return res.status(400).send({ status: false, message: "User allredy exisrt with this mail" })

        if (!password) return res.status(400).send("Password is required")
        if (!isVaildPass(password.trim())) return res.status(400).send({ status: false, msg: "Please provide a valid Password with min 8 to 15 char with Capatial & special (@#$%^!) char " })


        if (!address) return res.status(400).send({ status: false, message: "address is Required" })
        if (!isValidStr(address.trim())) return res.status(400).send({ status: false, message: "Plese Enter Valid address" })

        if (!pinCode) return res.status(400).send({ status: false, message: "pinCode is Required" })
        if (!isValidPincode(pinCode)) return res.status(400).send({ status: false, message: "Plese Enter Valid pincode" })

        const studentDetals = await studentModel.create(data)
        return res.status(201).send({ status: true, message: "studentDetals" })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}


module.exports = { registorStduents }