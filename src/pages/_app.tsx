import type { AppProps } from "next/app";
import { Toaster } from "sonner";

import Layout from "@/components/Other/Layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  )
}
