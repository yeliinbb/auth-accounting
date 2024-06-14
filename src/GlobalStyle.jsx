import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
    font-family: aktiv-grotesk-georgian, sans-serif;
    font-style: normal;
    color: #474845;
    box-sizing: border-box;
    }

    body {
        width: 100vw;
        /* height: 100vh; */
        background-color: #B4C4B1;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Link 컴포넌트 텍스트 밑줄 제거 */
     a {
        text-decoration: none;
     }
     button {
        background: inherit;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        overflow: visible;
        }

    .ModalOverlay {
            background-color: rgba(0, 0, 0, 0.5);
        }

    .ModalContent {
            top: 50%;
            left: 50%;
            right: auto;
            bottom: auto;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            position: absolute;
            background: white;
            border-radius: 4px;
            padding: 20px;
            max-width: 500px;
            width: 100%;
        }


`;

export default GlobalStyle;
