import { Html, Head, NextScript, Main } from "next/document";

function Document(){
    return(
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"rel="stylesheet" />    
            </Head>
            <body>                   
                <Main/>               
                <NextScript/>
            </body>
        </Html>
    );
}

export default Document;