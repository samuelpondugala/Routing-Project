import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="h-screen">
       <div className="flex justify-center h-[70%] gap-4">
        <Link to='men' className=" hover:underline font-bold decoration-blue-50 text-3xl"><h3>Men</h3></Link>
        <h3 className="font-bold decoration-blue-50 text-3xl">|</h3>
        <Link to='women'  className="font-bold hover:underline decoration-blue-50 text-3xl"><h3>Women</h3></Link>
        <h3 className="font-bold decoration-blue-50 text-3xl">|</h3>
        <Link to='kids'  className="font-bold hover:underline decoration-blue-50 text-3xl"><h3>Kids</h3></Link>
       </div>
       <Outlet/>
    </div>
  );
};

export default Product;