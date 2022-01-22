import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
    },
    detailColumn: {
        flexDirection: 'row',
        flexGrow: 9,
        textTransform: 'uppercase',
    },
    column: {
        flexDirection: 'column',
        flexGrow: 2,
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
    firstName: {
        fontSize: 24,
        color: 'red'
    },
    restName: {
        fontSize: 24,
    },
    columnContent: {
        fontSize: 10,
        color: 'gray',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
    email: {
        fontSize: 10,
        color: 'blue',
        textDecoration: 'none',
        alignSelf: 'flex-end',
        justifySelf: 'flex-end',
    },
});

export default ({ name, phone, addr, email }) => {
    let firstName = name.split(" ", 1);
    let restName = name.replace(firstName, '');

    return (
    <View style={styles.container}>
        <View style={styles.detailColumn}>
            <Text style={styles.firstName} render={() => (
                `${firstName} `
            )} fixed />
            <Text style={styles.restName} render={() => (
                `${restName}`
            )} fixed />
        </View>
        <View style={styles.column}>
            <Text style={styles.columnContent} render={() => (
                `${phone}`
            )} fixed />
            <Text style={styles.columnContent} render={() => (
                `${addr}`
            )} fixed />
            <Text style={styles.email} render={() => (
                `${email}`
            )} fixed />
        </View>
    </View>
)};