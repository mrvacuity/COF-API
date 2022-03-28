import db from "../db.js";
const report_model = db.report_model;
const lesson = db.lesson;
const score_model = db.score_model;
const history_model = db.history_model;
const comment = db.comment_model;
const feed_model = db.feed_model;
const component_model = db.component_model;
const test_model = db.test_model;
const users = db.customerModel;

const bannerModel = db.bannerModel;

const Op = db.Sequelize.Op;

const createtest = async (req, res) => {
  try {
    const data = await test_model.create(req.body);
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const gettest = async (req, res) => {
  try {
    const data = await test_model.findAll({
      where: {
        lesson_id: req.params.id,
      },
    });
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const deletetest = async (req, res) => {
  try {
    const id = req.params.id;

    const update = await test_model.destroy({
      where: { id: id },
    });
    res.json(update);
  } catch (error) {
    res.status(500).send(error);
  }
};


const creatcomponent_model = async (req, res) => {
  try {
    const data = await component_model.create(req.body);
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createlike = async (req, res) => {
  try {
    const condition = await bannerModel.findAll({
      where: {
        uid: req.user.id,
        feed_id: req.query.feed_id,
      },
    });

    if (condition.length > 0) {
      const ree = await bannerModel.destroy({
        where: {
          uid: req.user.id,
          feed_id: req.query.feed_id,
        },
      });
      res.status(200).json({
        data: ree,
      });
    } else {
      const data = await bannerModel.create({
        uid: req.user.id,
        feed_id: req.query.feed_id,
      });

      res.status(200).json({
        data: data,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const getalllike = async (req, res) => {
  try {
    const condition = await bannerModel.findAll({
      where: {
        uid: req.user.id,
      },
      include: [
        {
          model: feed_model,
          as: "like_models",
        },
      ],
    });

    const ccc = await Promise.all(
      condition.map(async (item) => {
        const commentss = await comment.findAll({
          where: {
            feed_id: item.dataValues.like_models.dataValues.id,
          },
        });

        const comments = await Promise.all(
          commentss.map(async (value) => {
            const user = await users.findOne({
              where: {
                id: value.dataValues.uid,
              },
            });

            return { ...value.dataValues, comment_models: user };
          })
        );

        const user = await users.findOne({
          where: {
            id: item.dataValues.like_models.dataValues.uid,
          },
        });

        const allLike = await bannerModel.findAll({
          where: {
            feed_id: item.dataValues.like_models.dataValues.id,
          },
        });

        return {
          ...item.dataValues,
          info: item.dataValues.like_models,
          comment_models: comments,
          user_model: user.dataValues,
          like_models: allLike,
        };
      })
    );

    res.status(200).json({
      data: ccc,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createscore = async (req, res) => {
  try {
    const data = await score_model.create({ ...req.body, uid: req.user.id });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createlesson = async (req, res) => {
  try {
    console.log(req.body);
    const data = await lesson.create(req.body);
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createfeed = async (req, res) => {
  try {
    const data = await feed_model.create({ ...req.body, uid: req.user.id });
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const deletefeed = async (req, res) => {
  try {
    const data = await feed_model.destroy({
      where: {
        id: req.query.id,
      },
    });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const updatefeed = async (req, res) => {
  try {
    const data = await feed_model.update(
      { ...req.body },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createhistory = async (req, res) => {
  try {
    console.log(req.body)
    const data = await history_model.create({ ...req.body, uid: req.user.id });

    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const updatehistory = async (req, res) => {
  try {
    const data = await history_model.update(
      { ...req.body },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createcomment = async (req, res) => {
  try {
    const data = await comment.create(req.body);
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const createreport = async (req, res) => {
  try {
    const data = await report_model.create({ ...req.body, uid: req.user.id });
    res.status(200).json({
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
};

const getcourseById = async (req, res) => {
  try {
    const response = await course_model.findByPk(
      req.user.id
      //   {
      //   include: {
      //     model: userInfo,
      //     as: "user_accounts",
      //     attributes: {
      //       exclude: ["password", "salt", "createdAt", "updatedAt"],
      //     },
      //   },
      //  }
    );

    res.json({ result: response });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getcourse = async (req, res) => {
  try {
    const { page } = req.query;

    const data = await lesson.findAll({
      include: [
        {
          model: component_model,
          as: "lesson",
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updatecomponent = async (req, res) => {
  try {
    const id = req.params.id;

    const update = await component_model.update(req.body, {
      where: { id: id },
    });
    res.json(update);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletecomponent = async (req, res) => {
  try {
    const id = req.params.id;

    const update = await component_model.destroy({
      where: { id: id },
    });
    res.json(update);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a Tutorial by the id in the request
const update = async (req, res) => {
  try {
    const id = req.params.id;

    const update = await lesson.update(req.body, {
      where: { id: id },
    });
    res.json(update);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletecourse = async (req, res) => {
  try {
    const id = req.params.id;

    const update = await lesson.destroy({
      where: { id: id },
    });
    res.json(update);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getallhistory = async (req, res) => {
  try {
    const { page } = req.query;

    const data = await history_model.findAll({
      where: { uid: req.user.id },
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

const getallfeed = async (req, res) => {
  try {
    const { page } = req.query;

    const data = await feed_model.findAll(
      req.query.myfeed
        ? {
            where: { uid: req.user.id },
            include: [
              {
                model: comment,
                as: "comment_model",
                include: {
                  model: users,
                  as: "comment_models",
                },
              },
              {
                model: users,
                as: "user_model",
              },
              {
                model: bannerModel,
                as: "like_models",
              },
            ],
          }
        : {
            include: [
              {
                model: comment,
                as: "comment_model",
                include: {
                  model: users,
                  as: "comment_models",
                },
              },
              {
                model: users,
                as: "user_model",
              },
              {
                model: bannerModel,
                as: "like_models",
              },
            ],
          }
    );

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getfeed = async (req, res) => {
  try {
    const { page } = req.query;

    const data = await feed_model.findAll({
      where: { id: req.user.id },
    });

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const allreport = async (req, res) => {
  try {
    const { page } = req.query;

    const data = await feed_model.findAll({
      where: { uid: req.user.id },
    });

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const score = async (req, res) => {
  try {
    const { page } = req.query;

    const data = await score_model.findAll({
      where: { uid: req.user.id },
    });

    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

const checkcondition = async (req, res) => {
  try {
    const data = await score_model.findAll({
      where: { uid: req.user.id, lesson_id: req.params.id },
    });

    res.json(data.length > 0);
  } catch (err) {
    res.status(500).send(err);
  }
};

export default {
  createreport,
  createfeed,
  createcomment,
  createhistory,
  createlesson,
  createscore,
  update,
  updatehistory,
  getcourseById,
  getcourse,
  getallhistory,
  getallfeed,
  getfeed,
  allreport,
  creatcomponent_model,
  createtest,
  deletetest,
  createlike,
  score,
  updatefeed,
  gettest,
  getalllike,
  deletefeed,
  checkcondition,
  deletecourse,
  deletecomponent,
  updatecomponent,
};
