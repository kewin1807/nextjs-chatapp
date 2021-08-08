import React from 'react';
import Image from "next/image";
import { Circle } from "better-react-spinkit";

function Loading(props) {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <Image src={"/logo.png"} alt="Loading" width="500" height="300" style={{ marginBottom: 100 }} />
            </div>
            <Circle color="#0078FF" size={60} />
        </center>
    );
}

export default Loading;