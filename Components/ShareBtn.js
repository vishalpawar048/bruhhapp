import React from 'react';
import { Share, View, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const ShareBtn = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View >
            <FontAwesome name="share-alt" size={25} color="#ab0153" onPress={onShare} />
     

    </View>
  );
};

export default ShareBtn;