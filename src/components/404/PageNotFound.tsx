import notfound from "../../assets/images/404.webp";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page_404">
      <div className="img_404_backdrop">
        <img src={notfound} alt="not found" className="img_404" />
      </div>
      
      <div>
        <p className="page_404_txt">404</p>
        <p className="page_404_txt">Page Not Found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
