import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 30,
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        paddingRight: 15,
    },
    columnContent: {
        fontSize: 10,
        color: 'gray',
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
    content: {
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        paddingRight: 125,
        paddingLeft: 10
    },
});

export default ({ summary }) => (
    <View style={styles.container}>
        <View style={styles.leftColumn}><Text style={styles.columnContent}>Professional Summary</Text></View>
        <Text style={styles.content} render={() => (
            `${summary}`
        )} fixed />
    </View>
);