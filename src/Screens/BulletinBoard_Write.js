import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

const BulletinBoard_Write = ({navigation}) => {
    return(
        <View style={styles.container}>
            {/* 상단부 */}
            <View style={styles.write_title}>

            </View>

            {/* 게시글 작성 부분 */}
            <View>

            </View>

            {/* 하단부 */}
            <TouchableOpacity>
                <Text> 완료 </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    write_title: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100
    }
})
export default BulletinBoard_Write;