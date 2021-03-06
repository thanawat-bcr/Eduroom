import React, { Fragment, useEffect, useState } from "react";
import EdqizText from "../edqiz/edqizText";
import CardQuiz from "../edqiz/cardQuiz";
import AddNewQuiz from "../edqiz/addNewQuiz";
import Grid from "@material-ui/core/Grid";
const Page1 = ({ data, goto, handleQuestionNumber, questionNumber }) => {


  console.log(data)
  useEffect(() => {
    console.log(data);
  }, [data])
  const renderQuestion = () => {

    if (data != null) {

      return data.map((el, index) => {
        return (
          <CardQuiz
            key={index}
            data={data}
            id={questionNumber}
            index={index}
            quizname={data[index].name}
            description={data[index].description}
            goto={goto}
            handleQuestionNumber={(val) => {
              handleQuestionNumber(val);
            }}
          />
        );
      });
    };
  }

  return (
    <Fragment>
      <div className="landing">
        <div style={{ marginTop: "5vh" }}>
          <EdqizText type="list" />
        </div>
        <div className="title">
          <div className="card">
            <div
              style={{
                color: "#3D467F",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                {renderQuestion()}
                <AddNewQuiz />
              </Grid>

              <br />
            </div>
          </div>
        </div>
        <br />
      </div>
      <style jsx>{`
        .title {
          display: flex;
          justify-content: center;
          margin-top: 5vh;
        }
        .card {
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

          background: white;
          padding: 0px;
          transition: 0.3s;
          width: 90vw;
          border-radius: 5vh;
        }
        .landing {
          background-image: url("/images/edqiz/create-bg.svg");
          width: 95vw;
          height: 100vh;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          top: 0;
        }
      `}</style>
    </Fragment>
  );
};
export default Page1;
