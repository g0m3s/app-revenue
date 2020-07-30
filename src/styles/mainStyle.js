import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container:{

        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
        textAlign: "center"

    },
    header: {

        backgroundColor: 'white',
        marginTop: 60,

    },
    h2: {

        fontSize: 20,
        textAlign: "center",

    },
    h2White: {

        color: "white",
        fontSize: 20,
        textAlign: "center",

    },
    item: {

        height: 148,
        width: 148,
        padding: 20,
        backgroundColor: "#0099ff",
        margin:15,
        borderRadius: 10,

    },
    textItem: {

        color: "white",
        fontSize: 20,

    },
    viewList:{

        height: 250,
        width: '100%',

    },
    main: {

        backgroundColor: "#0099ff",
        height: "100%",
        display: "flex",
        alignItems: "center",

    },
    img: {

        height: 60,
        width: "100%",
        paddingTop: 10,

    },
    list: {

        backgroundColor: "white",

    },
    listCategories: {

        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    listCategoriesRow: {

        display: "flex",
        flexDirection: "row"

    },
    TouchableOpacity: {

        height: 40,
        width: 130,
        borderRadius: 10,
        margin: 10,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    previewItems: {

        height: 300,
        width: "90%",
        marginTop: 25,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",

    },
    previewItemsRow: {

        flexDirection: "row",
        

    },
    TouchableOpacityItem: {

        width: 100,
        height: 40,
        backgroundColor: "#0099ff",
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    TouchableOpacityItemText: {

        color: "white"

    },
    viewChoiceFood: {

        width: "100%",
        alignItems: "center",
        justifyContent: "center"

    },
    textInput: {

        height: 40,
        width: "75%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#c1c1c1",
        paddingLeft: 10

    },
    listFood: {

        margin:10,
        width: "100%",
        padding: 10,

    },
    itemListFood: {

        height: 40,
        width: "100%",
        marginTop: 10,
        backgroundColor: "#0099ff",
        alignItems: "center",
        justifyContent: "center",

    },
    textItemListFood: {

        color: "white",
        fontSize: 18,

    },
    viewButtonPlay: {

        width: "90%",
        flexDirection: "row",
        justifyContent:"flex-end"

    },
    buttonPlay: {

        height: 70,
        width: 70,
        borderRadius: 150,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,

    },
    imgButtonPlay: {

        height: 40,
        width: 40,

    },
    containerRBSheet: {

        flex: 1,
        width: "100%",
        margin: 0,

    },
    headerRBSheet:{

        height: 70,
        width: "100%",
        backgroundColor: "#0099ff",
        alignItems: "center",
        justifyContent: "center"

    },

    mainReceita: {

        paddingRight: 5,

    },
    nomeReceita: {

        fontSize: 18,
        color: "white"

    },
    nomeSecao: {

        fontSize: 18,
        color: "#0099ff",
        marginLeft: 10,
        marginTop:5,
        marginBottom: 5

    },
    listaIngredientes: {



    },
    textItemIngredientes: {

        fontSize: 16,
        marginLeft: 15

    },
    viewSalvarReceita: {

        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 15

    },
    salvarReceita: {

        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "#0099ff",
        alignItems: "center",
        justifyContent: "center",

    },
    imgSalvarReceita: {

        height: 40,
        width: 40,

    }


})

export default styles