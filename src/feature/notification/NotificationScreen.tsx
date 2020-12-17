import * as React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import StyledText from 'components/base/StyledText';
import { useSelector } from 'react-redux';
import { RootState } from 'app-redux/rootReducer';
import { ScaledSheet } from 'react-native-size-matters';

const NotificationScreen: React.FunctionComponent = () => {
    const favorite = useSelector((state: RootState) => state.favorite);
    React.useEffect(() => {
        console.log('favorite :', favorite);
    }, [favorite]);
    const ItemUserLiked = ({ data }: any) => {
        const { user } = data;
        return (
            <View style={styles.wrapperItem}>
                <Image style={styles.avatar} source={{ uri: user.picture }} />
                <View style={styles.wrapperUser}>
                    <Text style={styles.name}>{`Name: ${user.name.first} ${user.name.last}`}</Text>
                    <Text style={styles.phoneNumber}>{`Phone: ${user.phone}`}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.wrapperAll}>
            <FlatList
                data={favorite}
                renderItem={({ item }) => <ItemUserLiked data={item} extraData={favorite} />}
                style={{ flex: 1 }}
                keyExtractor={(index: number) => `${index}`}
            />
        </View>
    );
};
const styles = ScaledSheet.create({
    wrapperItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    wrapperAll: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    wrapperUser: {
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    phoneNumber: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
export default NotificationScreen;
