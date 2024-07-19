import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../style/UserTask.css";
import moment from "moment";
import Alert from "./Alert";
import work from "../../assets/work.png"; // Path to the yellow pill image
import panadolImage from "../../assets/panadol.png"; // Path to the panadol image
import breakfast from "../../assets/breakfast.png"; // Path to the panadol image
import voice from "../../assets/voice.png"; // Path to the voice
import audio from "../../assets/audio.mp3"; // 

export const UserTask = () => {

  const image = {
    "breakfast": breakfast,
    "medicine": panadolImage,
    "work": work,
    "voice": voice
  }

  // let myAudio = document.getElementById("myAudio");
  // const [isPlaying, setIsPlaying] = useState(false);

const togglePlay = (text) => {
  const msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  // myAudio.onplaying()
  // setIsPlaying(!isPlaying);
  // isPlaying ? myAudio.pause() : myAudio.play();
};

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Janice Rolland",
      task: "Eat Breakfast",
      time: "10 AM",
      date: "2024-07-19",
      logo: "breakfast",
      voice: "voice",
      audio: true
    },
    {
      id: 2,
      name: "Ken Junior",
      task: "Take Medication",
      time: "12 PM",
      date: "2024-07-19",
      logo: "medicine",
      voice: "voice",
      audio: true,
    },
    {
      id: 3,
      name: "Mandy Brooklyn",
      task: "Login for work",
      time: "11 AM",
      date: "2024-07-20",
      logo: "work",
      voice: "voice",
      audio: true,
    },
  ]);

  const [task, setTask] = useState({ task: "", time: "", date: "" });
  const [dateSelected, onDateChange] = useState(new Date());
  const [modal, setModal] = useState(false);
  // const [voiceModal, setVoiceModal] = useState(false);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleEdit = (id) => {
    const selectedTask = tasks.find((todo) => todo.id === id);
    setTask(selectedTask);
    onDateChange(selectedTask.time);
    setModal(true);
  };

  const toggle = () => setModal(!modal);
  // const toggle_voice = () => setVoiceModal(!voiceModal);

  // const handleChange = (ev) => {
  //   if (!ev.target["validity"].valid) return;
  //   const dt = ev.target["value"] + ":00Z";
  //   const time = moment(dt).format("hh:mm");
  //   setTask({ ...task, time, dt });
  //   onDateChange(dt);
  // };

  const handleChangeTask = (e) => {
    const d = moment().format("YYYY-MM-DDThh:mm");
    setTask({ ...task, task: e.target.value });
  };

  const handleChangeDate = (e) => {
    setTask({ ...task, date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const updatedTasks = tasks.map((todo) =>
        todo.id === task.id ? { ...task, name: e.target.task.value } : todo
      );
      setTasks(updatedTasks);
    } else {
      const newTask = { ...task, id: Date.now() }; // Use a timestamp as the unique ID
      setTasks([...tasks, newTask]);
      setTask({ task: "", time: "", date: "" });
    }
    setModal(false);
  };

  return (
    <div className="task-page-container">
      <div className="task-header">
        <h2>MY SCHEDULED TASKS</h2>
      </div>
      <div className="task-grid">
        <div className="task-time-row">
          <div className="task-time-cell">Time</div>
          {["19 July", "20 July", "21 July"].map((date) => (
            <div key={date} className="task-time-cell">
              {date}
            </div>
          ))}
        </div>
        {["10 AM", "11 AM", "12 PM"].map((time) => (
          <div key={time} className="task-time-row">
            <div className="task-time-cell">{time}</div>
            {["19 Jul", "20 Jul", "21 Jul"].map((date) => (
              <div key={`${date}-${time}`} className="task-time-cell task-cell">
                {tasks
                  .filter(
                    (task) =>
                      task.time === time &&
                      moment(task.date).format("D MMM") === date
                  )
                  .map((task) => (
                    <div key={task.id} className="task-item">
                      {task.task}
                      {!!task.logo && <img className="img-size" onClick={toggle} src={image[task.logo]} alt='breakfast' />}
                      {task.audio && <><img className="img-size1" src={image[task.voice]} onClick={ () => togglePlay(task.task)}/> </>}
                      </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button className="add-task-button" onClick={toggle}>
          Add Task
        </button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>What would you like to do?</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            
            {" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};
