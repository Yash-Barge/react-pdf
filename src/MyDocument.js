import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Content/Header.js';
import Summary from './Content/Summary.js';
import Skills from './Content/Skills.js';

const styles = StyleSheet.create({
    page: {
        padding: 30
    }
});

const MyDocument = ({ name, phone, addr, email, summary, skills }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Header name={name} phone={phone} addr={addr} email={email} />
            <Summary summary={summary} />
            <Skills skills={skills} />
        </Page>
    </Document>
);

export default MyDocument;