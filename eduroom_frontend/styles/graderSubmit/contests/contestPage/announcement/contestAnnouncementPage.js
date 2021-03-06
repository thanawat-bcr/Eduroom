import css from "styled-jsx/css"
export default css`
  .main {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .size {
    width: 90%;
    height: 80%;
  }
  h2 {
    color: #5b5b5b;
    padding: 30px 0;
    margin-bottom: 0;
    border-right: 2px solid rgba(91, 91, 91, 0.1);
  }
  .flex-container {
    display: flex;
    padding-left: 3%;
    width: 95%;
    background-color: #eff0f6;
    margin-bottom: 8px;
  }
  .flex-item {
    color: #3d467f;
    padding 5px 0;
    font-weight: bold;
  }
  .announcement-list {
    height: 70%;
    border-right: 2px solid rgba(91, 91, 91, 0.1);
    border-bottom: 2px solid rgba(91, 91, 91, 0.1);
    overflow: auto;
  }
`
