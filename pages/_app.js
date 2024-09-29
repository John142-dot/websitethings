import "../styles/globals.css";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <MainLayout>
      {/* Add your random text here */}
      <div>
        <p>This is some random text displayed on the page!</p>
      </div>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
