import React from "react";
import { useState } from "react";
import { NativeSelect } from "@mui/material";
import "./inputform.css";
const Inputform = (handleform) => {
  const [questions, setquestions] = useState([""]);
  const [topic, settopic] = useState("");
  const [classid, setclassid] = useState("");
  const [date, setdate] = useState("");
  const [questionid, setquestionid] = useState("");
  const addquestion = () => {
    setquestions((prevNames) => [...prevNames, questionid]);
    setquestionid("");
  };
  const handleinput = () => {
    handleform(topic, questions, classid, date);
    console.log(date);
    console.log(topic);
    console.log(classid);
    console.log(questions);
  };
  return (
    <>
    <container className="TopicForm">
        <form>
          <h3>Todays Topics</h3><hr/>
        <div className="form-group">
          <label for="exampleFormControlInput1">Topic</label><br/>
          <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="Topic"
                      onChange={(event) => settopic(event.target.value)}
                      value={topic}/>
        </div>

        <label className="form-group" id="date">Date</label>
        <input type="date" id="topicDate" name="topicdate"
                    onChange={(event) => setdate(event.target.value)}
                    value={date}/><br/>
                           {/* <button type="button" className="btn-primary2" onClick={handleinput}>Submit</button> */}
        <div className="form-group">
            <label for="exampleFormControlInput1">Question</label><br/>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Question"
                        onChange={(event) => setquestionid(event.target.value)}
                        value={questionid}/>
                        
          </div>
          <h4>Added Questions</h4>

          <div className="questions">
            {questions.map((element, index) => {
              return (
                <div key={index}>
                  <h2>{element}</h2>
                </div>
              );
            })}
            </div>
            <button type="button"onClick={addquestion} className="btn-primary1">Add Question</button><br/>
            {/* <div className="form-group">
            <label for="exampleFormControlSelect1">Section</label><br/>
            <select className="form-control" id="exampleFormControlSelect1"onChange={(event) => setclassid(event.target.value)}>
              <option value={1}>Section A</option>
              <option value={2}>Section B</option>
              <option value={3}>Section C</option>
              value={classid}
            </select>
          </div> */}
          {/* <label className="form-group" id="date">Date</label>
        <input type="date" id="topicDate" name="topicdate"
                    onChange={(event) => setdate(event.target.value)}
        value={date}/><br/>*/}
                           <button type="button" className="btn-primary2" onClick={handleinput}>Submit</button>
        </form>
      </container>
    </>
  );
};
export default Inputform;
