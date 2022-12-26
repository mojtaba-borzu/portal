//styles
import "../styles/globals.css";

//types
import type { AppProps } from "next/app";

//layout
import PrimaryLayout from "../layout/PrimaryLayout";

//redux
import { wrapper } from "../redux/store";

function BranchesApp({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}

export default wrapper.withRedux(BranchesApp);
