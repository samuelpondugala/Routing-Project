import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-cyan-700  px-4 py-8">
      <h2 className="text-2xl font-bold" >David</h2>
      <div className="flex gap-8">
        {/* <a href="/" className="text-lg font-medium">Home</a>
        <a href="/about" className="text-lg font-medium">About</a>
        <a href="/product" className="text-lg font-medium">Product</a> */}
        <Link to='/' className="text-lg font-medium">Home</Link>
        <Link to='/about' className="text-lg font-medium">About</Link>
        <Link to='/courses' className="text-lg font-medium">Courses</Link>
        <Link to='/product' className="text-lg font-medium">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;