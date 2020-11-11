import css from 'styled-jsx/css'
export default css`
.package-header {
    display: flex;
    font-size: 1.7em;
    padding: 0 6% 3% 6%;
    font-weight: bold;
    text-shadow: 2px 1px rgba(0,0,0,0.5);
}
.container {
    background-color: #ffffff;
    width: 88%;
    margin: auto auto 5% auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.25);
    display: block;
}

input,select,textarea {
    border: 1px solid #3d467f;
    width: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1em;
    margin-bottom: 6px;
    background-color: #f4f5f7;
    cursor: pointer;
    color: #3d467f;
    font-weight: 500;
}
input[type=checkbox] {
    width: 5%;
    margin: 5px;
    height: 20px;
    width: 20px;
    background-color: #3d467f;
}
::placeholder {
    color: #3d467f;
    font-weight: 500;
}

.imageupload {
    border: 1px dashed #b3abbc;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: grey;
    padding: 20px;
    background-color: white;
    margin-bottom: 25px;
    height: 250px;
}
.fa-camera {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    color: #8E8796;
    font-size: 1.4em;
}
.subtitle {
    color: #3D467F;
    font-style: normal;
    font-weight: 650;
    font-size: 22px; 
    margin-bottom: 15px;   

}
.text {
    font-size: 20px; 
    padding: 5% 8% 3%;
}

.coursebox {
    background-color: white;
    border: 3px solid white;
    margin-bottom: 7%;
    width: 100%;
    text-align: center;
}
.create {
    padding: 3% 2% 3% 3%;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
}
::-webkit-scrollbar-track {
    background: white; 
  }
::-webkit-scrollbar {
    width: 10px;
  }
  
::-webkit-scrollbar-thumb {
    background: white;
  }
  
::-webkit-scrollbar-thumb:hover {
    background: #d3d4da;
  }
.list {
    border: 1px solid #EFF0F6;
    border-radius: 10px;
    padding: 1% 2%;
    margin-bottom: 1.5%;
    background-color: #e1eefb;
    text-align: left;
    display: flex;
    align-items: center;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
    
}
.createbutton {
    background: #FFAAE7;
    border: 3px solid #FFAAE7;
    border-radius: 30px;
    font-size: 22px; 
    color: white;
    padding: 13px 90px ;
    font-weight: 550;
    cursor: pointer;
    
}
.createbutton:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 0px 6px 2px rgba(0,0,0,0.1);
    transition: 0.25s;
  }
.backbutton {
    font-size: 1em;
    border: none;
    background-color: #f4f5f7;
    cursor: pointer;
}
.courseno {
    margin: 0 20px;
    text-align: center;
    font-weight: 550;
    font-size: 20px;
}
.dialog {
    margin: 20px;
    border: 2px solid #F2ECFE;
    width: 460px;
    height: 300px;
    text-align: center;
    align-content: center;
    justify-content: center; 
    flex-wrap: wrap; 
    display: flex
}
.indialog {
    text-align: center;
    align-content: center;
    justify-content: center; 
    flex-wrap: wrap; 
    display: flex
    flex-direction: column-reverse;
}
.fa-arrow-left {
    color: #FFAAE7;
    font-size: 3.5em;
    border: none;
}
.fa-arrow-left:hover {
    cursor: pointer;
    opacity: 0.9;
}

`
