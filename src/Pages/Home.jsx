import React from 'react';
import NavbarComp from './NavbarComp';
import { Container, Container2, Container3, Container4, Container5 } from '../Components/Container';

function Home() {

    return (
        <>

            <NavbarComp />
            <Container title="Special Title Treatment"
                subtitle="Travel / August 21 2017" />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />           

        </>
    );
}


export default Home;
