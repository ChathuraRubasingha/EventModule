import React, { useEffect, useState } from "react";
import StudentDefaultLayout from "../../Layout/StudentDefaultLayout";
import styles from "./EventHome.module.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
const EventHome = () => {
  const [data, setData] = useState([]);

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
    <StudentDefaultLayout>
      <Row gutter={16}>
        {data.map((event) => {
          return (
            <Col lg={24} sm={24} md>
              <div className={styles.main_container}>
                <div className={styles.card}>
                  <div className={styles.card_left}>
                    <img src={event.photo} />
                  </div>
                  <div className={styles.card_right}>
                    <div className={styles.content}>
                      <h2>{event.title}</h2>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.content_company}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxWBQhqdpOuV3ZRge-harpC9aMfcsMAbeCxQ63GBDRstIjbazHFPw0o9muSRCuL4VoA4&usqp=CAU" />
                        <h4>Virtuza</h4>
                      </div>
                    </div>

                    <div className={styles.content}>
                      <p>{event.breifDescription}</p>

                      <h3>
                        <b>{event.price}</b>
                      </h3>
                    </div>
                    <div className={styles.content}>
                      <button className={styles.btn}>
                        intrested <b>02</b>
                      </button>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.content_button}>
                        <button>
                          <Link to="eventInfo">View</Link>
                        </button>
                        <p>
                          Posted on{" "}
                          <b>{moment(event.createdAt).format("MMM DD yyyy")}</b>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </StudentDefaultLayout>
  );
};

export default EventHome;
