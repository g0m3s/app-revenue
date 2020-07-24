import React, { Component } from "react";
import {

    View,
    Text,
    FlatList,
    Image,
	TouchableOpacity,
    TextInput,
    Button,
    ScrollView

} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import RBSheet2 from "react-native-raw-bottom-sheet";
import RBSheet3 from "react-native-raw-bottom-sheet";
import * as Animatable from 'react-native-animatable'

var teste = []


export default class App extends Component {


    constructor (props) {

        super(props)
        this.state = {

            choice:    [],
            filtered:  [],
            selecteds: [],
            recipes:  [],
            ingredients: [],
            howToMake: "",
            recipeName: "",
            secao: []

        }

    }

    loadMeat = () => {

        fetch("http://localhost:3333/carnes")
 
            .then((response) => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json

                })
            })

    }

    loadSauces = () => {

        fetch("http://localhost:3333/molhos")
 
            .then((response) => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json

                })
            })
    }

    loadVegetables = () => {

        fetch("http://localhost:3333/legumes")

            .then( response => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json

                })

            })

    }

    loadFruits = () => {

        fetch("http://localhost:3333/frutas")

            .then( response => response.json())
            .then((json) => {

                this.setState({

                    choice: json,
                    filtered: json
                    
                })

            });

    }

    loadRecipes = () => {

        fetch("http://localhost:3333/receitas")

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


    }

    searchRecipes = () => {
        var includ = this.state.selecteds[0]
        // console.log('vapo')

        //fazer um forEach para todos os valores de "selecteds"

        this.setState({

            filtered: this.state.recipes.filter(function (res) { return res.nome.includes(includ)
                
                // if ( res.nome.includes() === " Ingredientes" ) {

                //     // return res.secao.conteudo.includes(includ)
                //     return console.log('vapo')
                //     // return res.secao
                // }
            }) 

        })

        // console.log(this.state.filtered)

    }

    makeMap = (nomeItem) => {

        this.setState ({

            nomeReceita: nomeItem

        })

        // this.state.filtered.map( (filtrados) => {

        //     if(filtrados.nome == nomeItem ) {

        //         this.state.filtered.map( (itemMapeado) => {

        //             itemMapeado.secao.map( (dentroItemMapeado) => {
        
        //                 if (dentroItemMapeado.nome ==  " Ingredientes" ) {
        
        //                     this.setState({ 
                                
        //                         ingredients: dentroItemMapeado.conteudo
                            
        //                     })
        
        //                 } 
        
        //             } )
        
        //         } )


        //     }

        // } )

        

    }

    testeSecao = (secao) => {

        this.setState({

            secao: secao

        })

    }

    addEspaco = () => {

        var teste2 = []

        this.state.secao.map((item) => {

            var i = 0

            for ( i; item.conteudo.length >= i; i++) {

                teste2[i] =  item.conteudo.concat("\n ")
                        
            }

        })

        console.log(teste2)

        return teste2

    }

  render() {

    data = [

      {key: 'Torta'},
      {key: 'Pudim'},
      {key: 'Cocada'},

    ]
    
    
    return (


		<ScrollView style = {styles.container} >

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
                                onPress={() => {
                                    this.loadMeat();
                                    this.filtro();
                                    this.RBSheet.open();
                                }}

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

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[0]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[1]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[2]}</Text>

                        </TouchableOpacity>


                    </View>

                    <View style = {styles.previewItemsRow}>

                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[3]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[4]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[5]}</Text>

                        </TouchableOpacity>


                    </View>


                    <View style = {styles.previewItemsRow}>

                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[6]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[7]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[8]}</Text>

                        </TouchableOpacity>


                    </View>

                    <View style = {styles.previewItemsRow}>

                        <TouchableOpacity
                            
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[9]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[10]}</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        
                            style = {styles.TouchableOpacityItem}
                            onPress = {() => {}}

                        >

                            <Text style = {styles.TouchableOpacityItemText} >{this.state.selecteds[11]}</Text>

                        </TouchableOpacity>


                    </View>
					
                </Animatable.View>

                <Animatable.View
                
                    style = {styles.viewButtonPlay}

                >

                    <TouchableOpacity

                        onPress = { () => { 
                            this.loadRecipes();
                            this.searchRecipes();
                            this.RBSheet3.open();
                        }}
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
                        data = {this.state.filtered}
                        style = {styles.listFood}
						renderItem={ ({item}) =>(

                            <TouchableOpacity 
                                style={styles.itemListFood}
                                onPress= {() => {

                                    this.setState({

                                        selecteds: this.state.selecteds.concat(item.nome)

                                    })

                                }}
                            >

                                <Text style = {styles.textItemListFood} >{item.nome}</Text>

                            </TouchableOpacity> 
                        )}

					/>

					</View>

				</RBSheet>

                <RBSheet2
                    ref={ref => {
					this.RBSheet2 = ref;
				}}
				height={700}
				openDuration={450}
				customStyles={{
					container: {
					alignItems: "center",
					borderRadius: 30
					}
				}} >

                    <ScrollView style = {styles.containerRBSheet} >

                        <View style = {styles.headerRBSheet}>
                        
                            <Text style = {styles.nomeReceita} >{this.state.nomeReceita}</Text>

                        </View>
                        

                        <View>

                            {/* <Text style = {styles.nomeSecao} >Ingredientes:</Text> */}
                            <Text style = {styles.nomeSecao} >Receita:</Text>

                            <FlatList

                                data= {this.state.secao}
                                // data= {teste}
                                renderItem={ ({item}) => (

                                    <Text style = {styles.textItemIngredientes} > - { item.conteudo.concat("\n ") }</Text>

                                )}
                                style = {styles.listaIngredientes}
                                animation="zoomInUp"
                                useNativeDriver
                            />

                        </View>
{/* 
                        <View>
                            
                            <Text style = {styles.nomeSecao} >Como fazer:</Text>
                            
                        </View>

                        <View>
                            
                            <Text style = {styles.nomeSecao} >Outras Informações:</Text>
                            
                        </View> */}

                    </ScrollView>


                </RBSheet2>

                <RBSheet3
				ref={ref => {
					this.RBSheet3 = ref;
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
    
                        placeholder = "Digite a receita"
                        autoCorrect = {false}

					/>

					<FlatList
                        data = {this.state.filtered}
                        style = {styles.listFood}
						renderItem={ ({item}) =>(

                            <TouchableOpacity 
                                style={styles.itemListFood}
                                onPress= { () => {

                                    // teste = this.addEspaco();
                                    this.makeMap(item.nome);
                                    this.testeSecao(item.secao);
                                    this.RBSheet3.close();
                                    setTimeout( () => {this.RBSheet2.open();}, 300 )

                                }}
                            >

                                <Text style = {styles.textItemListFood} >{item.nome}</Text>

                            </TouchableOpacity> 
                        )}

					/>

					</View>

				</RBSheet3>


		</ScrollView>

    )
  }
}

import styles from './styles/mainStyle'



// import bottomSheet from './components/bottom-sheet'
