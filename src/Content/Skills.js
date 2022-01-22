import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 30
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
    contentLeft: {
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        paddingLeft: 10,
        width: 170
    },
    contentRight: {
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        paddingLeft: 10,
        paddingRight: 250
    },
});

export default ({ skills }) => {
    let arrSkills = skills.split(/\n/);
    let i = 0;
    let arrEven = [''];
    let arrOdd = [''];

    for (i; i < arrSkills.length; i++) {
        if (i % 2) {
            arrOdd[(i - 1) / 2] = arrSkills[i];
        } else {
            arrEven[i / 2] = arrSkills[i];
        }
    }

    let evenSkills = `${arrEven}`.replace(/,/g, '\n');  
    let oddSkills = `${arrOdd}`.replace(/,/g, '\n');  
    
    return (
    <View style={styles.container}>
        <View style={styles.leftColumn}><Text style={styles.columnContent}>Skills</Text></View>
        <Text style={styles.contentLeft} render={() => (
            `${evenSkills}`
        )} fixed />
        <Text style={styles.contentRight} render={() => (
            `${oddSkills}`
        )} fixed />
    </View>
)};