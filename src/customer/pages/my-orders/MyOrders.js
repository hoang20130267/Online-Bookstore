import {Link, useLocation} from "react-router-dom";
import Breadcrumb from "../../components/general/Breadcrumb";
import LeftSideBar from "../my-account/sub-components/LeftSideBar";
import {useEffect, useState} from "react";
import APIService from "../../../service/APIService";

export const MyOrders = () => {
    const location = useLocation();
    const [orders, setOrders] = useState([]);
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user ? user.token : null;
    const apiService = new APIService(token);

    const fetchData = async () => {
        try {
            const result = await apiService.fetchData(`http://localhost:8080/api/orders`);
            setOrders(result);
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Breadcrumb location={location}/>
            <div className="container d-flex mb-5 mt-5 px-0">
                <LeftSideBar/>
                {/*<form method="post" encType="multipart/form-data" className="infor_user">*/}
                <div className="col-md-9">
                    <div className="checkout__order">
                        <table className="table table-sm fs--1 mb-0">
                            <thead>
                            <tr>
                                <th className="sort align-middle pe-5" scope="col" data-sort="total-spent"
                                    style={{width: "20%"}}>Mã Đơn
                                </th>
                                <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                    style={{width: "20%"}}>Tổng tiền
                                </th>
                                <th className="sort align-middle pe-5" scope="col" data-sort="email"
                                    style={{width: "20%"}}>Ngày đặt
                                </th>
                                <th className="sort align-middle " scope="col" data-sort="total-orders"
                                    style={{width: "25%"}}>Trạng thái
                                </th>
                                <th className="sort align-middle " scope="col" data-sort="total-orders"
                                    style={{width: "20%"}}>Chi tiết
                                </th>
                            </tr>
                            </thead>
                            <tbody className="list" id="table-latest-review-body">
                            {orders.map(order => (
                                <tr key={order.id} className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs--1 align-middle ps-0 py-3">
                                        <p className="mb-0 text-1100 fw-bold">{order.orderCode}</p>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap pe-5">
                                        <p className="mb-0 ms-3 text-1100 fw-bold">{order.orderTotal}</p>
                                    </td>
                                    <td className="email align-middle white-space-nowrap pe-5">{order.orderDate}</td>
                                    <td className="email align-middle white-space-nowrap pe-5">
                                        <p style={{color: "#cccccc"}}>{order.status?.name}</p>

                                    </td>
                                    <td className="email align-middle white-space-nowrap pe-5">
                                        <Link className="fw-semi-bold text-1100" to={`/user/order/${order.id}`}>Xem</Link>
                                    </td>
                                </tr>))}

                            </tbody>
                        </table>


                    </div>

                </div>
                {/*</form>*/}
            </div>
        </div>
    )
}
export default MyOrders;