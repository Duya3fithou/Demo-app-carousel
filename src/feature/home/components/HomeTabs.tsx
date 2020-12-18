import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ITEM_HEIGHT, ITEM_WIDTH } from '../data/staticData';

const initialLayout = { width: Dimensions.get('window').width };

const SIZE_ICON = 22;

const ItemCard: React.FunctionComponent = ({ data }: any) => {
    const { user } = data;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: '', icon: Images.icons.tab.home },
        { key: 'Email', title: '', icon: Images.icons.tab.notification },
        { key: 'Phone', title: '', icon: Images.icons.tab.setting },
        { key: 'Account', title: '', icon: Images.icons.tab.setting },
        { key: 'Settings', title: '', icon: Images.icons.tab.setting },
    ]);

    const renderScene = SceneMap({
        Home: () => renderInformation('address', user.location.street),
        Email: () => renderInformation('email', user.email),
        Phone: () => renderInformation('phone number', user.phone),
        Account: () => renderInformation('username', user.username),
        Settings: () => renderInformation('name', `${user.name.title} ${user.name.first} ${user.name.last}`),
    });
    const renderInformation = (type: any, dataInfo: any) => {
        return (
            <View style={styles.wrapperInfo}>
                <Text style={styles.titleInfo}>{`My ${type} is`}</Text>
                <Text style={styles.descriptionInfo}>{dataInfo}</Text>
            </View>
        );
    };
    const styleIcon = (focused: boolean) => {
        return { width: SIZE_ICON, height: SIZE_ICON, tintColor: focused ? Themes.COLORS.primary : undefined };
    };
    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'blue', top: 0 }}
            style={{ backgroundColor: 'white' }}
            renderIcon={({ route, focused, color }) => {
                return <Image style={styleIcon(focused)} source={route.icon} resizeMode="contain" />;
            }}
        />
    );

    return (
        <View style={styles.slide}>
            <View style={styles.wrapperAvatar}>
                <Image source={{ uri: user.picture }} style={styles.avatar} />
            </View>
            <View style={styles.headerCard} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                tabBarPosition={'bottom'}
                swipeEnabled={false}
                renderTabBar={renderTabBar}
            />
        </View>
    );
};
const styles = ScaledSheet.create({
    title: {},
    slide: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        marginTop: ITEM_WIDTH - 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    headerCard: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        height: ITEM_HEIGHT / 2.8,
        backgroundColor: '#F8F8F8',
    },
    wrapperAvatar: {
        width: 123,
        height: 123,
        borderRadius: 65,
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 30,
        left: ITEM_WIDTH / 2 - 65,
        zIndex: 99999,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff',
    },
    wrapperInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    titleInfo: {
        color: '#919191',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    descriptionInfo: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default ItemCard;
