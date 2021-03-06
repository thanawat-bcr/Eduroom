import css from 'styled-jsx/css'
export default css`
.box {
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  opacity: 0.75;
  transition: 0.25s;
}
.box:hover {
  opacity: 1;
  transition: 0.25s;
  cursor: pointer;
}
.active{
  opacity: 1;
  transition: 0.25s;
}
.image-container {
  height: 120px;
  overflow: hidden;
}
.coursepic {
  display: block;
  max-width: 100%;
  height: auto !important;
  width: auto;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.detail {
  padding: 0 15px;
  padding-bottom: 15px;
  margin-top: -10px;
}
.title {
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #14142b;
}
`
