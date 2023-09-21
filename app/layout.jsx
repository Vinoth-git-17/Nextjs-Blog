import "@styles/global.css";
import Navbar from '@components/Navbar'
import Footer from "@components/Footer"

export const metadata = {
  title: 'Blog Site ',
  description: 'Create a post with your ideas',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className=" bg-gradient h-full w-full">
      <body className=" font-Inter">
        <Navbar/> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
