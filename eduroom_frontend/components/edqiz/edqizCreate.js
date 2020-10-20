import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import style from '../../styles/edqiz/createPage'
import EdquizText from './edqiz-text'
import EdquizPagination from './edqiz-create-pagination'
const Content = () => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="landing">
        <div>
          <div className="landing-title">
            <span className="navy-text">
              CREATE NEW <EdquizText />
            </span>
          </div>
          <div className="content">
            <div className="card">
              <div className="col-12">
                <div className="row">
                  <EdquizPagination current={1} />
                </div>
              </div>
              <div className="col-12">
                <div className="row row-content">
                  <div className="col-12">
                    <p className="landing-header">QUIZ NAME</p>
                  </div>
                  <div className="col-12">
                    <span style={{ color: '#3d467f' }}>
                      let's start by giving the quiz a name
                    </span>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="QUIZ NAME . . ."
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="landing-button"
                      onClick={() => router.push('/login')}
                    >
                      <span className="landing-button-text">GO!</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Content