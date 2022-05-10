import React, { useState, useEffect } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventInfo.module.css";

const EventInfo = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/event/getallevents")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const getAllevents = data;
        setData(getAllevents);
      });
  }, []);

  return (
    <div>
      <StudentDefaultLayout>
        <h1>Details</h1>

        <div className={styles.eventInfo_container}>
          <h3 className={styles.title}>Title </h3>
          <h3 className={styles.title}>Company : </h3>
          <h3 className={styles.title}>FullDecribation : </h3>
          <h3 className={styles.title}>Price : </h3>
          <h3 className={styles.title}>Ctagries : </h3>
          <h3 className={styles.title}>Time : </h3>
          <h3 className={styles.title}>Register before : </h3>
        </div>
      </StudentDefaultLayout>
    </div>
  );
};

export default EventInfo;
