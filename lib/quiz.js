const tiny = require('tiny-json-http');
const endpoint = require('./endpoint');
const config = require('../config');

let quiz = {};

quiz.searchbyname = function(course,name,callback){
 return tiny.get({
     url: endpoint.quiz.search(course),
     headers: config.headers,
     data: {search_term: name
    }},callback);
}
quiz.get = (course, id, callback) => {
  return tiny.get({
    url: endpoint.quiz.modify(course, id),
    headers: config.headers
  }, callback);
};

quiz.create = (course, params, callback) => {
 return tiny.post({
    url: endpoint.quiz.create(course),
    headers: config.headers,
    data: params
  }, callback);
};

quiz.edit = (course, id, params, callback) => {
 return tiny.put({
    url: endpoint.quiz.modify(course, id),
    headers: config.headers,
    data: params
  }, callback);
};

quiz.delete = (course, id, callback) => {
 return tiny.del({
    url: endpoint.quiz.modify(course, id),
    headers: config.headers
  }, callback);
};

module.exports = quiz;

