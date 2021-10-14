import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { Container } from '../../components/common/Container';
import Row from '../../components/common/Row';
import SimpleHeader from '../../components/common/SimpleHeader';
import { categories } from '../../constants';
import { LoadCategories } from '../../redux/action/CategoriesAction';
import {purple, primary} from "../../assets/colors/index";

class Categories extends Component{

    componentDidMount(){
        this.props._Categories();
    }

    render() {
        return(
            <Container>
                 <SimpleHeader
                     heading={"Categories"}
                 />
                 {
                    this.props._loader?
                        <ActivityIndicator size="large" color={primary} style={{flex:1}} />
                    :
                    this.props.Category.map(item=>
                        <View key={item.id}>
                            <Row 
                                text={item.category_name}
                                onPress={()=>this.props.navigation.navigate("EventsBy_Category",{id:item.id, name:item.category_name})}  
                            />
                        </View>
                    )

                 }
            </Container>
         )
    }
}

function mapStateToProps(state) {
    return{
        Category:state.Categories_reducer.Categories,
        _failed:state.Categories_reducer.failed,
        _error:state.Categories_reducer.error,
        _loader:state.Categories_reducer.loader,
        _success:state.Categories_reducer.success,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        _Categories: () => dispatch(LoadCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);