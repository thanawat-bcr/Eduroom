import css from 'styled-jsx/css';
export default css`
    body {
        margin: 0;
    }

    .balloon-container {
        height: 100vh;
        padding: 1em;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }

    .balloon {
        height: 125px;
        width: 105px;
        border-radius: 75% 75% 70% 70%;
        position: relative;
    }

    .balloon:before {
        content: '';
        height: 75px;
        width: 1px;
        padding: 1px;
        background-color: #fdfd96;
        display: block;
        position: absolute;
        top: 125px;
        left: 0;
        right: 0;
        margin: auto;
    }

    .balloon:after {
        content: '▲';
        text-align: center;
        display: block;
        position: absolute;
        color: inherit;
        top: 120px;
        left: 0;
        right: 0;
        margin: auto;
    }

    @keyframes float {
        from {
            transform: translateY(100vh);
            opacity: 1;
        }
        to {
            transform: translateY(-300vh);
            opacity: 0;
        }
    }
    .div {
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 100vw;
        height: 1000vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000000;
    }
    .white {
        background-color: white;
        box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
        padding: 20px;
        border-radius: 5px 5px;
        width: 50vw;
        height: 50vh;
    }
`;
