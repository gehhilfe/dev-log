import React from "react";
import Layout from "../components/layout";
import Obfuscate from 'react-obfuscate';

const ImpressumPage = () => {
    return (
        <Layout>
            <h1>Impressum</h1>
            <p><strong>Anbieter:</strong></p>
            <p>
                Tim Burkert <br />
                Süßenerstr. 11 <br />
                70327 Stuttgart
            </p>
            <p>
                E-Mail: <Obfuscate
                    email="gehhife@gmail.com"
                    headers={{
                        subject: 'Impressum gehhilfe.dev',
                    }}
                />
            </p>
        </Layout>)
}

export default ImpressumPage