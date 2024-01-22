import axios from "axios";
const API_URL = "http://localhost:8080/api/courses";
function getToken() {
  let token;
  if (localStorage.getItem("user")) {
    token = JSON.parse(localStorage.getItem("user")).token;
  } else {
    token = "";
  }
  return token;
}
class CourseService {
  post(title, description, price) {
    let token = getToken();
    return axios.post(
      API_URL,
      { title, description, price },
      { headers: { Authorization: token } }
    );
  }
  // 學生註冊過的課程
  getEnrolledCourse(_id) {
    let token = getToken();
    return axios.get(API_URL + "/student/" + _id, {
      headers: { Authorization: token },
    });
  }

  // 講師擁有的課程
  get(_id) {
    let token = getToken();
    return axios.get(API_URL + "/instructor/" + _id, {
      headers: { Authorization: token },
    });
  }
  // 依照課程名稱找出課程
  getCourseByName(name) {
    let token = getToken();
    return axios.get(API_URL + "/findByName/" + name, {
      headers: { Authorization: token },
    });
  }
  enroll(_id) {
    let token = getToken();
    return axios.post(
      API_URL + "/enroll/" + _id,
      {},
      {
        headers: { Authorization: token },
      }
    );
  }
}

let courseService = new CourseService();
export default courseService;
