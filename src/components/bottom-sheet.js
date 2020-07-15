import RBSheet from "react-native-raw-bottom-sheet";

function bottomSheet ()  {

    return (

        <RBSheet
        ref={ref => {
            this.RBSheet = ref;
        }}
        height={300}
        openDuration={250}
        customStyles={{
            container: {
            justifyContent: "center",
            alignItems: "center"
            }
        }}
        >
            <View><Text>teste</Text></View>
        </RBSheet>

    )
}

export default bottomSheet
