import PDFDocument from "pdfkit";
import fs from "fs";
import moment from "moment";
import db from "../db.js";
const course = db.course_model;
const course_start = db.start_course;

const user_accounts = db.user_accounts;
const userInfo = db.userInfoModel;
const cert = db.cer_model;

// import PDFDocument from 'pdfkit'

const create = async (req, res) => {
  try {
    let DefaultsName =
      req.body.name.replace(".png", "") + moment().format("DD_MM_YYYY_hh_ss");

    if (req.body.base64.split(",")[0].includes("pdf")) {
      DefaultsName = DefaultsName + ".pdf";
    }
    if (req.body.base64.split(",")[0].includes("png")) {
      DefaultsName = DefaultsName + ".png";
    }
    if (
      req.body.base64
        .split(",")[0]
        .includes("vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      DefaultsName = DefaultsName + ".docx";
    }
    if (req.body.base64.split(",")[0].includes("msword")) {
      DefaultsName = DefaultsName + ".doc";
    }

    if (
      !req.body.base64.split(",")[0].includes("pdf") &&
      !req.body.base64.split(",")[0].includes("png") &&
      !req.body.base64
        .split(",")[0]
        .includes(
          "vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) &&
      !req.body.base64.split(",")[0].includes("msword")
    ) {
      res.status(500).send({ message: "file not support" });
    } else {
      fs.writeFile(
        `src/uploads/${DefaultsName}`,
        req.body.base64
          .replace(`/^data:application/pdf;base64,/`, "")
          .replace(
            `/^data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,/`,
            ""
          )
          .replace(`/^data:image/png;base64,/`, "")
          .replace(`/^data:application/msword;base64,/`, ""),
        { encoding: "base64" },
        function (err, data) {
          if (err) {
            res.json({ message: err });
          } else {
            res.json({ imageRefId: DefaultsName });
          }
        }
      );
    }
  } catch (error) {
    res.status(500).send({
      message: error || "Some error occurred while creating the Location.",
    });
  }
};

const createpdf = async (req, res) => {
  try {
    let DefaultsName =
      req.body.name
        .replace(".png", "")
        .replace(".pdf", "")
        .replace(".jpeg", "")
        .replace(".jpg", "") + moment().format("DD_MM_YYYY");

    if (req.body.base64.split(",")[0].includes("pdf")) {
      DefaultsName = DefaultsName.replace(".pdf", "") + ".pdf";
    }
    if (req.body.base64.split(",")[0].includes("png")) {
      DefaultsName = DefaultsName.replace(".png", "") + ".png";
    }
    if (req.body.base64.split(",")[0].includes("jpeg")) {
      DefaultsName = DefaultsName.replace(".jpeg", "") + ".png";
    }
    if (req.body.base64.split(",")[0].includes("jpg")) {
      DefaultsName = DefaultsName.replace(".jpg", "") + ".png";
    }
    if (
      req.body.base64
        .split(",")[0]
        .includes("vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      DefaultsName = DefaultsName.replace(".docx", "") + ".docx";
    }
    if (req.body.base64.split(",")[0].includes("msword")) {
      DefaultsName = DefaultsName.replace(".doc", "") + ".doc";
    }

    if (
      !req.body.base64.split(",")[0].includes("pdf") &&
      !req.body.base64.split(",")[0].includes("png") &&
      !req.body.base64.split(",")[0].includes("jpeg") &&
      !req.body.base64.split(",")[0].includes("jpg") &&
      !req.body.base64
        .split(",")[0]
        .includes(
          "vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) &&
      !req.body.base64.split(",")[0].includes("msword")
    ) {
      res.status(500).send({ message: "file not support" });
    } else {
      fs.writeFile(
        `src/uploads/${DefaultsName}`,
        req.body.base64
          .replace(`data:application/pdf;base64,`, "")
          .replace(
            `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,`,
            ""
          )
          .replace(`data:image/png;base64,`, "")
          .replace(`data:image/jpg;base64,`, "")
          .replace(`data:image/jpeg;base64,`, "")
          .replace(`data:application/msword;base64,`, ""),
        { encoding: "base64" },
        function (err, data) {
          if (err) {
            res.json({ message: err });
          } else {
            res.json({ imageRefId: DefaultsName });
          }
        }
      );
    }
  } catch (error) {
    res.status(500).send({
      message: error || "Some error occurred while creating the Location.",
    });
  }
};

const getImage = async (req, res) => {
  try {
    fs.readFile("src/uploads/" + req.params.id + ".png", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "image/png" });
        res.end("err");
      } else {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
      }
    });
  } catch (error) {
    res.json({ message: "err" });
  }
};

const getPDF = async (req, res) => {
  try {
    fs.readFile("src/uploads/" + req.params.id + ".pdf", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/pdf" });
        res.end("err");
      } else {
        res.writeHead(200, { "Content-Type": "application/pdf" });
        res.end(data);
      }
    });
  } catch (error) {
    res.json({ message: "err" });
  }
};

const exportPDF = async (req, res) => {
  try {
    const restw = await course.findOne({ where: { id: req.params.id } });
    const rest = await cert.findOne({
      where: { id: restw.dataValues.cer_id },
    });
    const user = await user_accounts.findOne({
      where: { id: restw.dataValues.uid },
      include: {
        model: userInfo,
        as: "user_accounts",
        attributes: {
          exclude: ["password", "salt", "updatedAt"],
        },
      },
    });

    const users = await user_accounts.findOne({
      where: { id: req.query.uid },
      include: {
        model: userInfo,
        as: "user_accounts",
        attributes: {
          exclude: ["password", "salt", "updatedAt"],
        },
      },
    });

    const info = await course_start.findOne({
      where: {
        course_id: req.params.id,
        uid: req.query.uid,
      },
    });

    console.log(info.dataValues);

    const doc = new PDFDocument({
      size: [
        parseInt(rest.dataValues.sizeDetail.split("X")[0]),
        parseInt(rest.dataValues.sizeDetail.split("X")[1]),
      ],
    });

    const {
      courseInfo,
      teacherInfo,
      studentInfo,
      startEducationInfo,
      endEducationInfo,
    } = rest.dataValues;

    doc.pipe(fs.createWriteStream("src/pdf/example.pdf"));
    doc.image(
      `src/uploads/${rest.dataValues.imgRef
        .replace("https://api-coc.wishesexistence.co/api/image/getimage/", "")
        .replace(".png", "")}.png`,
      0,
      0,
      {
        fit: [
          parseInt(rest.dataValues.sizeDetail.split("X")[0]),
          parseInt(rest.dataValues.sizeDetail.split("X")[1]),
        ],
        align: "left",
      }
    );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)
      .text(
        user.dataValues.user_accounts.dataValues.firstName +
          " " +
          user.dataValues.user_accounts.dataValues.lastName,
        teacherInfo.x + 450,
        teacherInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)

      .text(
        users.dataValues.user_accounts.dataValues.firstName +
          " " +
          users.dataValues.user_accounts.dataValues.lastName,
        studentInfo.x + 450,
        studentInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)

      .text(
        moment(info.dataValues.start_date).format("DD MMMM YYYY"),
        startEducationInfo.x + 450,
        startEducationInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)

      .text(
        moment(info.dataValues.updatedAt).format("DD MMMM YYYY"),
        endEducationInfo.x + 450,
        endEducationInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)
      .text(restw.dataValues.title, courseInfo.x + 450, courseInfo.y + 300);
    // Finalize PDF file
    doc.end();
    setTimeout(() => {
      fs.readFile("src/pdf/example.pdf", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "application/pdf" });
          res.end("err");
        } else {
          res.writeHead(200, { "Content-Type": "application/pdf" });
          res.end(data);
        }
      });
    }, 400);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const exportexamPDF = async (req, res) => {
  try {
    // const restw = await course.findOne({ where: { id: req.params.id } });
    const rest = await cert.findOne({
      where: { id: req.params.id },
    });

    const doc = new PDFDocument({
      size: [
        parseInt(rest.dataValues.sizeDetail.split("X")[0]),
        parseInt(rest.dataValues.sizeDetail.split("X")[1]),
      ],
    });

    const {
      courseInfo,
      teacherInfo,
      studentInfo,
      startEducationInfo,
      endEducationInfo,
    } = rest.dataValues;

    doc.pipe(fs.createWriteStream("src/pdf/example.pdf"));
    doc.image(
      `src/uploads/${rest.dataValues.imgRef
        .replace("https://api-coc.wishesexistence.co/api/image/getimage/", "")
        .replace(".png", "")}.png`,
      0,
      0,
      {
        fit: [
          parseInt(rest.dataValues.sizeDetail.split("X")[0]),
          parseInt(rest.dataValues.sizeDetail.split("X")[1]),
        ],
        align: "left",
      }
    );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)
      .text("[ตัวอย่างชื่อ คุณครู]", teacherInfo.x + 450, teacherInfo.y + 300);
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)

      .text(
        "[ตัวอย่างชื่อ นักเรียน]",
        studentInfo.x + 450,
        studentInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)

      .text(
        "[ตัวอย่างชื่อ วันที่เริ่มเรียน]",

        startEducationInfo.x + 450,
        startEducationInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)

      .text(
        "[ตัวอย่างชื่อ วันที่เรียนจบ]",
        endEducationInfo.x + 450,
        endEducationInfo.y + 300
      );
    doc
      .font("src/pdf/asset/THSarabun.ttf")
      .fontSize(rest.dataValues.cssstyle.fontSize)
      .fillColor(rest.dataValues.cssstyle.color)
      .text("[ตัวอย่างชื่อ คอร์ส]", courseInfo.x + 450, courseInfo.y + 300);
    // Finalize PDF file
    doc.end();
    setTimeout(() => {
      fs.readFile("src/pdf/example.pdf", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "application/pdf" });
          res.end("err");
        } else {
          res.writeHead(200, { "Content-Type": "application/pdf" });
          res.end(data);
        }
      });
    }, 400);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

const Delete = async (req, res) => {
  try {
    const id = req.params.id + ".png";
    fs.unlinkSync("src/uploads/" + id);
    res.json({ message: "delete success" });
  } catch (err) {
    res.status(500).json({ message: "file not found" });
  }
};

export default {
  create,
  getImage,
  Delete,
  createpdf,
  getPDF,
  exportPDF,
  exportexamPDF,
};
