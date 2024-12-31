import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./screens/Home/home";
import Navbar from "./Navbar/navbar";
import Login from "./screens/Login/login";
import Register from "./screens/Register/register";
import CustomSwitch from "./custom_switch";
import Coverage from "./screens/Coverage/coverage";
import MobileNavbar from "./Navbar/mobile_navbar";
import TransactionList from "./screens/Transaction/transaction_list";
import FoodList from "./screens/Food/food_list";
import Search from "./screens/Search/search";
import {AuthProvider} from "./context/auth_context";
import OnlyOutRoute from "./utils/only_out_route";
import PrivateRoute from "./utils/private_route";
import RestaurantScreen from "./screens/Restaurant/restaurant_screen";
import SingleTransaction from "./screens/Transaction/single_transaction";
import SingleFood from "./screens/Food/single_food";
import SingleExtra from './screens/Extra/single_extra';
import SingleInstruction from './screens/Instruction/single_instruction';
import ExtraList from './screens/Extra/extra_list';
import InstructionsList from './screens/Instruction/instruction_list';
import AddFood from './screens/Food/add_food';
import AddExtra from "./screens/Extra/add_extra";
import AddInstruction from "./screens/Instruction/add_instruction";
import CategoryScreen from "./screens/Category/category_screen";

function App() {
    return (
        <Router>
            <AuthProvider>
                <MobileNavbar/>
                <div className='main'>
                    <Navbar/>
                    <div className='main-container'>
                        <CustomSwitch>
                            <Route path='/' element={<PrivateRoute/>}>
                                <Route path='/' element={<Home/>}/>
                            </Route>
                            <Route path='/login' element={<OnlyOutRoute/>}>
                                <Route path='/login' element={<Login/>}/>
                            </Route>
                            <Route path='/register' element={<OnlyOutRoute/>}>
                                <Route path='/register' element={<Register/>}/>
                            </Route>
                            <Route path='/coverage' element={<PrivateRoute/>}>
                                <Route path='/coverage' element={<Coverage/>}/>
                            </Route>
                            <Route path='/search' element={<PrivateRoute/>}>
                                <Route path='/search' element={<Search/>}/>
                            </Route>
                            <Route path='/transaction-list' element={<PrivateRoute/>}>
                                <Route path='/transaction-list' element={<TransactionList/>}/>
                            </Route>
                            <Route path='/food-list' element={<PrivateRoute/>}>
                                <Route path='/food-list' element={<FoodList/>}/>
                            </Route>
                            <Route path='/restaurant' element={<PrivateRoute/>}>
                                <Route path='/restaurant' element={<RestaurantScreen/>}/>
                            </Route>

                            <Route path='/transaction-list' element={<PrivateRoute/>}>
                                <Route path='/transaction-list' element={<SingleTransaction/>}/>
                            </Route>
                            <Route path='/transaction/:serial' element={<PrivateRoute/>}>
                                <Route path='/transaction/:serial' element={<SingleTransaction/>}/>
                            </Route>
                            <Route path='/food/:uuid' element={<PrivateRoute/>}>
                                <Route path='/food/:uuid' element={<SingleFood/>}/>
                            </Route>
                            <Route path='/add-food' element={<PrivateRoute/>}>
                                <Route path='/add-food' element={<AddFood/>}/>
                            </Route>
                            <Route path='/extras-list' element={<PrivateRoute/>}>
                                <Route path='/extras-list' element={<ExtraList/>}/>
                            </Route>
                            <Route path='/extra/:uuid' element={<PrivateRoute/>}>
                                <Route path='/extra/:uuid' element={<SingleExtra/>}/>
                            </Route>
                            <Route path='/add-extra' element={<PrivateRoute/>}>
                                <Route path='/add-extra' element={<AddExtra/>}/>
                            </Route>
                            <Route path='/instruction/:uuid' element={<PrivateRoute/>}>
                                <Route path='/instruction/:uuid' element={<SingleInstruction/>}/>
                            </Route>
                            <Route path='/instructions-list' element={<PrivateRoute/>}>
                                <Route path='/instructions-list' element={<InstructionsList/>}/>
                            </Route>
                            <Route path='/add-instruction' element={<PrivateRoute/>}>
                                <Route path='/add-instruction' element={<AddInstruction/>}/>
                            </Route>
                            <Route path='/category' element={<PrivateRoute/>}>
                                <Route path='/category' element={<CategoryScreen/>}/>
                            </Route>
                        </CustomSwitch>
                    </div>

                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
