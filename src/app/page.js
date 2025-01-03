"use client";
import { useState } from "react";
// import styles from "./page.module.css";
import { Component } from "react";
import styles from "../Component/styles/page.module.css";
import Container from "../Component/Container";
// import Container from "../Component/Tasks";
import Tasks from "@/Component/Task";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodoHandler = () => {
    setTodos([...todos, newTodo]);
  };
  // const deleteHandler = () => {
  //   alert("are you sure to delete ?");
  // };
  return (
    <div>
      <div className={styles[`todo-container`]}>
        <h1>To-Do list</h1>
        <div className={styles.flex}>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className={styles.flexButton}>
          <div className={styles.blueAll}>
            <button>All</button>
          </div>

          <button>Active</button>
          <button>Completed</button>
          {/* <button onClick={deleteHandler}>Delete</button> */}
        </div>

        <p className={styles.text}>No tasks yet. Add one above!</p>
        <div className={styles.flex}>
          <p>Powered by</p>
          <a href="https://pinecone.mn/">Pinecone academy</a>
        </div>
        <Tasks todos={todos} />
        {/* <div>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
        </div> */}
      </div>
    </div>
  );
}
