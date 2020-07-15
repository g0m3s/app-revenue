import React, { Component } from "react";
import {

    View,
    Text,
    FlatList,
    Image,
	TouchableOpacity,
	TextInput,

} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import * as Animatable from 'react-native-animatable'

var teste = "C"

export default class Example extends Component {

    constructor (props) {

        super(props)
        this.state = {

            choice: [],
            filtered: []

        }

    }

    loadMeat = () => {

        fetch("http://localhost:3000/carnes")
 
            .then((response) => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json

                })
            })

    }

    loadSauces = () => {

        fetch("http://localhost:3000/molhos")
 
            .then((response) => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json

                })
            })
    }

    loadVegetables = () => {

        fetch("http://localhost:3000/legumes")

            .then( response => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json

                })

            })

    }

    loadFruits = () => {

        fetch("http://localhost:3000/frutas")

            .then( response => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json
                    
                })

            });

    }


    filtro = (txt) => {


        if (txt != ""){

            this.setState({

                filtered: this.state.choice.filter(function (res) { return res.nome.includes(txt)})

            })
        }else{

            this.setState({

                filtered: this.state.choice
            })

        }


    } //a ideia e fazer o filtro e passar ele para a fatlist. posso fazer um if para retornar tudo se nao tiver nenhum filtro


  render() {

    data = [

      {key: 'Devin'},
      {key: 'Dan'},
      {key: 'Dominic'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},

	]
    
    return (

		<View style = {styles.container} >

			<View style = {styles.viewList}>

				<View style = {styles.header}>

					<Animatable.Text 

						style = {styles.h2}
						animation="zoomInUp"

						
					>Minhas Receitas</Animatable.Text>

				</View>

				<Animatable.View

					animation="bounceInRight"
					useNativeDriver
					duration = {1500}

				>

					<FlatList
						data= {data}
						renderItem={ ({item}) => ( <TouchableOpacity style = {styles.item} ><Text style = {styles.textItem} >{item.key}</Text></TouchableOpacity> )}
						horizontal = {true}
						style = {styles.list}
						animation="zoomInUp"
						useNativeDriver
					/>
					
				</Animatable.View>

			</View>

			<Animatable.View 

				style = {styles.main}
				animation = "bounceInUp"
				useNativeDriver
				duration = {1300}
				
			>

                <Image

                    style = {styles.img}
                    source = {require('./img/wave2.png')}

                />

                <Text style = {styles.h2White} >Quais alimentos voce tem em casa agora?</Text>

                <View style = {styles.listCategories} >

                        <View style = { styles.listCategoriesRow } >

                            <TouchableOpacity
                            
                                style = {styles.TouchableOpacity}
                                onPress={() => {this.loadMeat(); this.filtro(); this.RBSheet.open(); }}

                            >

                                <Text>Carnes</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                            
                                style = {styles.TouchableOpacity}
                                onPress={() => {this.loadSauces(); this.filtro(); this.RBSheet.open(); }}

                            >

                                <Text>Molhos</Text>

                            </TouchableOpacity>

                        </View>

                        <View style = { styles.listCategoriesRow } >

                            <TouchableOpacity
                            
                                style = {styles.TouchableOpacity}
                                onPress={() => {this.loadVegetables(); this.filtro(); this.RBSheet.open(); }}

                            >

                                <Text>Legumes</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                            
                                style = {styles.TouchableOpacity}
                                onPress={() => {this.loadFruits(); this.filtro(); this.RBSheet.open(); }}

                            >

                                <Text>Frutas</Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                <Animatable.View
                    
                    style = {styles.previewItems} 
                    animation = "zoomInUp"
                    useNativeDriver
                    duration = {950}

                >

                    <View style = {styles.previewItemsRow}>


                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>


                    </View>

                    <View style = {styles.previewItemsRow}>

                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>


                    </View>


                    <View style = {styles.previewItemsRow}>

                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>


                    </View>

                    <View style = {styles.previewItemsRow}>

                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >Molhos</Text>

                        </TouchableOpacity>


                    </View>
						

                </Animatable.View>

                <Animatable.View
                
                    style = {styles.viewButtonPlay}

                >

                    <TouchableOpacity

                        onPress = { () => {}}
                        style = {styles.buttonPlay}

                    > 

                        <Image 
                        
                            style = {styles.imgButtonPlay}
                            source = {require('./img/search.png')}

                        />


                    </TouchableOpacity>

                 </Animatable.View>

            </Animatable.View>

				<RBSheet
				ref={ref => {
					this.RBSheet = ref;
				}}
				height={700}
				openDuration={450}
				customStyles={{
					container: {
					paddingTop: 40,
					alignItems: "center",
					borderRadius: 30
					}
				}}
				>
					<View style = {styles.viewChoiceFood}>
						
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {

                            this.filtro(text)
                        }
                    }
    
                        placeholder = "Digite o produto"
                        autoCorrect = {false}

					/>

					<FlatList
                        // data = { this.state.choice.filter(function (res) { return res.nome === "FRALDINHA"} ) }
                        data = {this.state.filtered}
						renderItem={ ({item}) =>( <TouchableOpacity style={styles.itemListFood}><Text style = {styles.textItemListFood} >{item.nome}</Text></TouchableOpacity> )}
                        style = {styles.listFood}

					/>

                    <Text>{this.state.txt}</Text>
						

					</View>

				</RBSheet>

		</View>

    )
  }
}

import styles from './styles/mainStyle'

// import bottomSheet from './components/bottom-sheet'