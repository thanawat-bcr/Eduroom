
import Head from "next/head";
import React, { Fragment, useState, useEffect, useContext } from "react";
import {
  Link,
} from "@material-ui/core";

import style from "../../../styles/forum/showForum";
import General from "../../../components/template/general";
import InstructorsHowtoSetThePriceofYourCourse from "../../../components/support/coursemanagement/InstructorsHowtoSetThePriceofYourCourse";
const courseinstandteaching = () => {
  return <Fragment>
    
      <General >
        
            <div
                style={{
                    display: "flex",
                    flex: "1 1 auto",
                    justifyContent: "space-between",
                }}
            >
            <div id="nav">
                    <div className="top">
                    <Link href='/support'>Eduroom Support
                    </Link><label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label><Link href='/support/Course-Building'>Course Taking</Link>
                    <label style={{marginLeft:'20px',marginRight:'20px'}}>&gt;</label>Instructors: How to Set The Price of Your Course
                    
                    <InstructorsHowtoSetThePriceofYourCourse/>
                    </div>
                        
                </div>
                <img alt="background-img" src="/images/supforumbg.svg" className="background-img" />
                <style jsx>{style}</style>
                <style jsx>
                    {`
            .background-img {
              position: fixed;
              bottom: 0;
              width: 100vw;
              z-index: 0;
            }
            #nav {
              width: 100%;
              z-index: 5;
            }
            .form {
              display: flex;
              text-align: center;
            }
            .sub {
              display: flex;
              width: 100%;
              justify-content: center;
            }
            .inner {
              width: 25%;
            }
            .paper {
              margin: 5%;
            }
            .top {
              padding: 50px 70px 0px 70px;
            }
          `}
                </style>
                </div>
            </General>
  </Fragment>;
};
export default courseinstandteaching;
