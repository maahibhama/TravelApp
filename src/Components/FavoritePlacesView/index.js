import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, FlatList } from "react-native";

import PlaceView from "./PlaceView";
import styles from "./styles";


export default class FavoritePlacesView extends PureComponent {
    static propTypes = {
        data: PropTypes.array,
        navigation: PropTypes.object.isRequired
    };

    static defaultProps = {
        data: [],
    }

    renderItem = this.renderItem.bind(this)

    onClickSeeAll() {
       // this.props.navigation.navigate(Routes.Featured)
    }

    onTouchCategory(item) {
        //this.props.navigation.navigate(Routes.Featured)
    }

    render() {
        return (
            <View style={styles.containerView}>
                <FlatList
                    extraData={this.state}
                    data={this.props.data}
                    horizontal={true}
                    pagingEnabled={true}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.tableView}
                />
            </View>
        )
    }

    renderItem({ item }) {
        return (
            <PlaceView info={item} onTouch={() => { this.onTouchCategory(item) }} />
        )
    }

}