import './App.css';
import NavBar from './components/navbar/NavBar';
import ReccoTheme from './themes/ReccoTheme';
import OrderHeader from './components/order-menu/OrderHeader';
import OrderMenu from './components/order-menu/OrderMenu';
import OrderList from './components/order-menu/OrderList';

function App() {
    return (
        <ReccoTheme>
            <NavBar />
            <OrderHeader />
            <OrderMenu />
            <OrderList />
        </ReccoTheme>
    );
}

export default App;
