import loading from "./loader.module.css";

const Loader = () => {
  return (
    <div className={loading.loader}>
      <div
        className={loading["jimu-primary-loading"]}
      ></div>
    </div>
  );
};

export default Loader;
