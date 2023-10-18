const { COURSE } = require('../models');
const { axiosCall } = require('../helpers/httpRequestHelper');

const create = async ({ body }) => {
  try {
    if (body) {
      const data = await COURSE.create(body);
      return { type: 'success', message: `course created`, data };
    }
    return { type: 'success', message: `No Data to process` };
  } catch (error) {
    throw error;
  }
};

const findAll = async ({ query }) => {
  try {
    const options = query;
    let data = await COURSE.find(options).lean();
    let updatedData = [];
    for (const course of data) {
      const response = await axiosCall(
        `${process.env.AUTH_SERVICE_URL || 'http://localhost:3001/v1/users/'}${
          course.user
        }`,
        'get'
      );
      const updatedCourse = { ...course, user: response.data };
      updatedData.push(updatedCourse);
    }
    data = updatedData;
    if (data.length > 0) {
      return { type: 'success', message: 'Record found!', data };
    } else {
      return { type: 'bad', message: 'Record not found!' };
    }
  } catch (error) {
    throw error;
  }
};

const findOne = async (filters) => {
  try {
    const data = await COURSE.findOne(filters);
    if (data) {
      return { type: 'success', message: 'course found!', data };
    } else {
      return { type: 'bad', message: 'course not found!', data };
    }
  } catch (error) {
    throw error;
  }
};

const update = async ({ params, body }) => {
  try {
    const _id = params.courseId;
    body.updatedAt = new Date();
    if (!_id) return { type: 'error', message: 'Please prvide the course Id' };

    const data = await COURSE.findByIdAndUpdate(_id, body, { new: true });
    if (data)
      return {
        type: 'success',
        message: `${data.courseName.toUpperCase()} Course Updated`,
        data,
      };
    else return { type: 'bad', message: `course not found` };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const purge = async ({ params }) => {
  try {
    const _id = params.courseId;
    const data = await COURSE.findByIdAndDelete(_id);
    if (data) {
      return {
        type: 'success',
        message: `${data.courseName.toUpperCase()} course Deleted`,
      };
    } else return { type: 'bad', message: `user not found` };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  findAll,
  create,
  findOne,
  update,
  purge,
};
