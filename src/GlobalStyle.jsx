import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
    font-family: aktiv-grotesk-georgian, sans-serif;
    font-style: normal;
    color: #474845;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #B4C4B1;
        margin: 0 auto;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
    }

    header {
        background-color: #f6f5f4;
        width: 1200px;
        /* h1 세로축 가운데 정렬 하드 코딩 */
        height: 70px;
        padding-top: 7px;
        box-sizing: border-box;
        /*  */
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 15px;
        font-size: 45px;
        font-weight: 600;
    }
    /* Link 컴포넌트 텍스트 밑줄 제거 */
     a {
        text-decoration: none;
     }


`;

export default GlobalStyle;
