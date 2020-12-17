import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { getDataApi } from 'api/modules/api-app/general';
import SwipeCards from 'react-native-swipe-cards';
import { RootState } from 'app-redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavorite } from 'app-redux/favorite/actions';
import { ITEM_HEIGHT, ITEM_WIDTH } from './data/staticData';

import ItemCard from './components/HomeTabs';

const HomeScreen: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const favorite = useSelector((state: RootState) => state.favorite);
    const [dataCards, setDataCards] = useState<any>([]);

    useEffect(() => {
        if (dataCards.length < 5) {
            getData();
        }
    }, [dataCards]);

    const getData = async () => {
        const response = await getDataApi();
        const tempArray = dataCards;
        tempArray.push(response.results[0]);
        setDataCards([...tempArray]);
    };
    const handleYup = (card: any) => {
        getData();
        favorite.push(card);
        dispatch(updateFavorite(favorite));
    };
    const handleNope = (card: any) => {
        getData();
    };
    const cardRemoved = (index: number) => {
        const tempArray = dataCards;
        tempArray.shift();
        setDataCards([...tempArray]);
    };
    return (
        <View style={styles.wrapperAll}>
            <SwipeCards
                cards={dataCards}
                renderCard={(cardData: any) => <ItemCard data={cardData} />}
                renderNoMoreCards={() => <View />}
                handleYup={handleYup}
                handleNope={handleNope}
                cardRemoved={cardRemoved}
            />
        </View>
    );
};

const styles = ScaledSheet.create({
    wrapperAll: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 3,
        backgroundColor: 'black',
    },
    body: {
        flex: 5,
        backgroundColor: 'white',
    },
    title: {},
    slide: {
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
});

export default HomeScreen;
