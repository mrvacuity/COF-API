import db from "../db.js";
const Tutorial = db.user_accounts;
const Op = db.Sequelize.Op;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import randtoken from "rand-token";
import sign from "jwt-encode";
import resign from "jwt-decode";
import { URLSearchParams } from "url";
import fetch from "node-fetch";
import thaibulksmsApi from "thaibulksms-api";
const saltRounds = 10;

async function generateAccessToken(username) {
  return await jwt.sign(username.dataValues, process.env.TOKEN_SECRET, {
    expiresIn: "18000s"
  });
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} // Create and Save a new Tutorial


const create = async (req, res) => {
  try {
    console.log(req.body);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt); // const tutorial = req.body;

    const data = await Tutorial.create({ ...req.body,
      password: hash,
      salt
    });
    res.status(200).json({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

const createFacebook = async (req, res) => {
  try {
    const title = req.body.password;
    var condition = title ? {
      password: title,
      Type: "FACEBOOK"
    } : null; // console.log("body >>>", req.body);

    const research = await Tutorial.findAll({
      where: condition
    });

    if (research.length > 0) {
      const token = await generateAccessToken(research[0]);
      var refreshToken = randtoken.uid(256);
      res.json({
        accessToken: token,
        refreshToken
      });
    }

    if (research.length == 0) {
      const tutorial = req.body;
      const data = await Tutorial.create(tutorial);
      const token = await generateAccessToken(data);
      var refreshToken = randtoken.uid(256);
      res.json({
        accessToken: token,
        refreshToken
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

const Login = async (req, res) => {
  try {
    const title = req.body.username;
    var condition = title ? {
      [Op.or]: [{
        email: title
      }, {
        telephoneNo: title
      }],
      Type: "EMAIL"
    } : null;
    const data = await Tutorial.findAll({
      where: condition
    });
    let result = await bcrypt.compare(req.body.password, data[0].password);

    if (data.length > 0 && result) {
      const token = await generateAccessToken(data[0]);
      var refreshToken = randtoken.uid(256);
      const secret = "secret";
      const jwt = sign({ ...data[0],
        refreshToken
      }, secret);
      res.status(200).json({
        accessToken: token,
        refreshToken: jwt
      });
    }

    if (data.length == 0 || !result) {
      res.status(401).send("Username not Register.");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const RefreshToken = async (req, res) => {
  try {
    const title = req.body.refreshToken;
    const data = resign(title);
    const token = await generateAccessToken(data);
    res.json(token);
  } catch (err) {
    res.status(500).send(err);
  }
};

const forgetPassword = async (req, res) => {
  try {
    res.json("SUCCESS");
  } catch (err) {
    res.status(500).send(err);
  }
}; // Retrieve all Tutorials from the database.


const findAll = async (req, res) => {
  try {
    const title = req.query.email;
    console.log("body >>>", req.body);
    var condition = title ? {
      email: {
        [Op.iLike]: `%${title}%`
      }
    } : null; // var condition = title ? { email: title } : null;

    const data = await Tutorial.findAll({
      where: condition
    });
    return data;
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

const findAllUser = async (req, res) => {
  try {
    // const title = req.query.email;
    // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;
    // var condition = title ? { email: title } : null;
    // console.log("body >>>", req.body);
    const data = await Tutorial.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

const findOneEmail = async (req, res) => {
  try {
    const title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

    var condition = title ? {
      email: title
    } : null;
    const data = await Tutorial.findAll({
      where: condition
    });

    if (data.length > 0) {
      return data[0];
    }

    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

const findOneEmailAndSocket = async (req, res) => {
  try {
    const title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

    var condition = title ? {
      email: title,
      socketID: req.query.socketID
    } : null;
    const data = await Tutorial.findAll({
      where: condition
    });

    if (data.length > 0) {
      return data[0];
    }

    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
    return null;
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

const checkSocket = async (req, res) => {
  try {
    const title = req.query.email; // var condition = title ? { email: { [Op.iLike]: `%${title}%` } } : null;

    var condition = title ? {
      socketID: req.query.socketID
    } : null;
    const data = await Tutorial.findAll({
      where: condition
    });

    if (data.length > 0) {
      return data;
    }

    return [];
  } catch (err) {
    return [];
  }
}; // Find a single Tutorial with an id


const findOne = async (req, res) => {
  try {
    console.log();
    const id = req.user.id;
    const data = await Tutorial.findByPk(id);
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving Tutorial with id="
    });
  }
}; // Update a Tutorial by the id in the request


const update = async (req, res) => {
  try {
    const id = req.params.id;
    const update = await Tutorial.update(req.body, {
      where: {
        id: id
      }
    });
    const response = await Tutorial.findByPk(id);
    return response;
  } catch (error) {
    return;
  }
}; // Delete a Tutorial with the specified id in the request


const Delete = (req, res) => {
  const id = req.params.id;
  Tutorial.destroy({
    where: {
      id: id
    }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  });
}; // Delete all Tutorials from the database.


const deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  }).then(nums => {
    res.send({
      message: `${nums} Tutorials were deleted successfully!`
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all tutorials."
    });
  });
}; // Find all published Tutorials


const findAllPublished = (req, res) => {
  Tutorial.findAll({
    where: {
      published: true
    }
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tutorials."
    });
  });
};

const sendOTP = async (req, res) => {
  try {
    const options = {
      // apiKey: '9d51a324656e0d4f279d102743a64fbc',
      // apiSecret: 'acfa018510583e3d0203a21e2e062d42',
      apiKey: "1704737560475458",
      apiSecret: "4f425ed8a9122c9ae2b2e247322f9457"
    };
    const otp = thaibulksmsApi.otp(options); // const encodedParams = new URLSearchParams();

    const response = await otp.request(req.body.number);
    res.json(response.data).then(console.log(response.data));
    return res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
};

const verifyotp = async (req, res) => {
  try {
    const options = {
      // apiKey: '9d51a324656e0d4f279d102743a64fbc',
      // apiSecret: 'acfa018510583e3d0203a21e2e062d42',
      apiKey: "1704737560475458",
      apiSecret: "4f425ed8a9122c9ae2b2e247322f9457"
    };
    const otp = thaibulksmsApi.otp(options); // const token,otpCode
    // const encodedParams = new URLSearchParams();

    console.log(req.body.tokens);

    if (req.body.otpCode.length != 6 || req.body.tokens == undefined) {
      res.status(400).json({
        message: "data not found"
      });
    }

    const response = await otp.verify(req.body.tokens, req.body.otpCode);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
};

export default {
  create,
  findAll,
  findAllUser,
  findOneEmail,
  findOneEmailAndSocket,
  findOne,
  Delete,
  deleteAll,
  findAllPublished,
  update,
  checkSocket,
  Login,
  createFacebook,
  RefreshToken,
  forgetPassword,
  sendOTP,
  verifyotp
};