import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div>
      <p>Normal Font</p>
      <h1 className={`${robotoFont.className}`}>Roboto font</h1>
    </div>
  );
};

export default Home;
