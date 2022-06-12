import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
    // by default, activeTab is "Delivery". because of the useState("Delivery").
    return (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderButton text="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* Note that the "text", "btnColor", "textColor" are all props. */}
        </View>
    )
}

const HeaderButton = (props) => (
    <View>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            // meaning: if props.activeTab is whatever the text is, then the background color is black. otherwise, give me white.
            // ie: whatever's selected will have a black background.
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
            onPress={() => props.setActiveTab(props.text)}
        // what we're doing here: changing what the active tab is. 
        // ie: when the user clicks on the button, the active tab is changed to the text of the button.
        >
            { /* touchableOpacity allows us to add onPressed() to the Delivery Text. */
            /* props is a parameter. */}
            <Text style={{
                color: props.activeTab === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900"
            }}> {props.text} </Text>
        </TouchableOpacity>

    </View>
)