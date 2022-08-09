import React, { useState, useRef } from 'react';
import { View, Alert, ScrollView, Text } from 'react-native';
import {
    Button,
    Paragraph,
    Dialog,
    Portal,
    Provider,
    TextInput,
    Divider,
} from 'react-native-paper';

const Poppup = (props) => {
    return (
        <Provider>
            <View>
                <Portal>
                    <Dialog
                        visible={props.visible}
                        onDismiss={props.hideDialog}
                        style={props.style}

                    >
                        <Dialog.Title>{props.title}</Dialog.Title>
                        <Dialog.ScrollArea>
                            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
                                <View style={{marginVertical:20}} >
                                    {
                                        props.data.map((item, index) => {
                                            return (
                                                <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }} >
                                                    <Text>{item.date}</Text>
                                                    <Divider />
                                                    <Text>{item.status}</Text>
                                                    <Divider />
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </Dialog.ScrollArea>
                        <Dialog.Actions>
                            <Button
                                onPress={props.hideDialog}
                                color='red'

                            >Close
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
};

export default Poppup;
