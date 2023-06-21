import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    };
    *,::after, ::before {
        box-sizing: inherit;
    };

    body {
        margin: 0 auto;
        background: ${({theme}) => theme.color.whisper};
        font-family: "Roboto", sans-serif;
    };
    
    body::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    body::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: rgba(0,0,0,0.2);
    }
    body::-webkit-scrollbar-thumb:hover{
  	    background: rgba(0,0,0,0.4);
    }
    body::-webkit-scrollbar-thumb:active{
  	    background: rgba(0,0,0,0.5);
    }
`
